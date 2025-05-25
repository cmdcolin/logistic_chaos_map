import { useRef, useEffect, useState } from 'react'
import saveAs from 'file-saver'
import { draw } from 'logistic-map-wasm'
import { settingsMap, useAppStore } from './store'
import drawCanvas from './drawCanvas'

import './App.css'

type Coord = [number, number]
function App() {
  const store = useAppStore()
  const {
    wasm,
    vert,
    animate,
    fg,
    bg,
    minX: paramMinX,
    maxX: paramMaxX,
    minR: paramMinR,
    maxR: paramMaxR,
    scaleFactor: paramScaleFactor,
    N: paramN,
    M: paramM,
  } = store
  const ref = useRef<HTMLCanvasElement>(null)
  const mouseoverRef = useRef<HTMLCanvasElement>(null)
  const minX = +paramMinX
  const maxX = +paramMaxX
  const minR = +paramMinR
  const maxR = +paramMaxR
  const scaleFactor = +paramScaleFactor
  const N = +paramN
  const M = +paramM

  // internal states
  const [mouseDown, setMouseDown] = useState<Coord>()
  const [mouseCurr, setMouseCurr] = useState<Coord>()
  const [loading, setLoading] = useState(true)
  const [proportion, setProportion] = useState(0)
  const [time, setTime] = useState(0)

  useEffect(() => {
    let cancelled = false
    if (!Number.isNaN(+scaleFactor) && !Number.isNaN(+N) && !Number.isNaN(+M)) {
      const elt = ref.current
      if (!elt) {
        return
      }
      const ctx = elt.getContext('2d')
      if (!ctx) {
        return
      }
      const { width, height } = elt.getBoundingClientRect()
      const factor = +scaleFactor
      elt.width = width * factor
      elt.height = height * factor

      setLoading(true)
      setProportion(0)
      setTimeout(() => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        ;(async () => {
          ctx.fillStyle = bg
          ctx.fillRect(0, 0, width * factor, height * factor)
          ctx.fillStyle = fg
          const startTime = performance.now()
          if (wasm) {
            draw(
              ctx,
              width * factor,
              height * factor,
              minR,
              maxR,
              minX,
              maxX,
              vert,
              M,
              N,
            )
          } else {
            let lastTime = performance.now()
            for (const iter of drawCanvas(
              ctx,
              width * factor,
              height * factor,
              minR,
              maxR,
              minX,
              maxX,
              vert,
              +M,
              +N,
            )) {
              if (animate) {
                setProportion(iter / (width * factor))
                if (performance.now() - lastTime > 10) {
                  await new Promise(resolve => setTimeout(resolve, 0))
                  lastTime = performance.now()
                }
              }
              if (cancelled) {
                break
              }
            }
          }
          setTime(performance.now() - startTime)

          //if !cancelled seems to be a race condition?
          if (!cancelled) {
            setLoading(false)
            setProportion(0)
          }
        })()
      }, 100)
    }
    return () => {
      cancelled = true
    }
  }, [minR, maxR, minX, maxX, scaleFactor, vert, animate, wasm, N, M, fg, bg])

  useEffect(() => {
    const elt = mouseoverRef.current
    if (!elt) {
      return
    }
    const ctx = elt.getContext('2d')
    if (!ctx) {
      return
    }
    const { width, height } = elt.getBoundingClientRect()
    elt.width = width
    elt.height = height
    if (mouseDown && mouseCurr) {
      ctx.clearRect(0, 0, width, height)
      const [x1, y1] = mouseDown
      const [x2, y2] = mouseCurr
      ctx.fillStyle = 'rgba(255,0,0,0.3)'
      ctx.fillRect(x1, y1, x2 - x1, y2 - y1)
    }
  }, [mouseDown, mouseCurr])

  return (
    <div className="m-5">
      <h1 className="text-3xl">f(x)=rx(x-1)</h1>
      <p>
        The function above is iterated for values of r between [2,4] and x
        between [0,1] and points. Click and drag a region to zoom in. The
        program iterates, trying to draw N points (with a limit of iterating M
        times) in the zoomed in region, which results in higher computation time
        at zoomed in values. When zoomed in, it has to iterate the logistic map
        longer to find that many points to draw resulting in it being slower
        when zoomed in.
      </p>

      <p>
        The scale factor (can make it e.g. 4 to make the canvas 4x larger than
        the screen size itself) makes the canvas size larger, allowing the code
        to render higher resolution images (use the "Save PNG" to save the
        resulting image). You can then import the result into gimp and do smooth
        downsampling of the result to get smooth unpixelated textures.
        Increasing the M and N paramters allows controlling how many points are
        drawn at high zoom level.
      </p>
      <p>
        Note: my main goal when starting this project was to demonstrate using
        wasm+react in a monorepo in a basic way. The wasm drawing mode is not
        faster and doesn't provide the animation/progress bar but may be able to
        be improved. Also note, the work is done on the main thread so the
        browser may hang if animation is not used
      </p>
      <p>
        See <a href="https://en.wikipedia.org/wiki/Logistic_map">Wikipedia</a>{' '}
        for more info on the fractal
      </p>
      <div>
        {Object.entries(settingsMap).map(([key, { title, type, callback }]) => {
          return type === 'checkbox' ? (
            <div key={key}>
              <input
                id={key}
                type="checkbox"
                checked={store[key as keyof typeof store] as boolean}
                onChange={event => {
                  callback(event.target.checked, store)
                }}
              />
              <label htmlFor={key}>{title}</label>
            </div>
          ) : (
            <div key={key}>
              <input
                id={key}
                type="text"
                value={`${store[key as keyof typeof store]}`}
                onChange={event => {
                  callback(event.target.value, store)
                }}
              />
              <label htmlFor={key}>{title}</label>
            </div>
          )
        })}
        <p>
          {loading
            ? `Loading...${
                proportion ? `${(proportion * 100).toPrecision(3)}%` : ''
              }`
            : null}
        </p>
        <button
          onClick={() =>
            ref.current?.toBlob(b => {
              if (b) {
                saveAs(b, `frac_${performance.now()}.png`)
              }
            })
          }
        >
          Save as PNG
        </button>

        <button
          onClick={() => {
            store.setMaxX('1')
            store.setMinX('0')
            store.setMinR('2')
            store.setMaxR('4')
          }}
        >
          Reset
        </button>
        {loading ? null : <p>Render time: {time / 1000}s</p>}
      </div>
      <div className="relative">
        <canvas ref={ref} className="bg-white w-full h-full" />
        <canvas
          className="absolute left-0 top-0 w-full h-screen cursor-crosshair z-50"
          ref={mouseoverRef}
          onMouseDown={event => {
            const { offsetX: x, offsetY: y } = event.nativeEvent
            setMouseDown([x, y])
            setMouseCurr([x, y])
          }}
          onMouseMove={event => {
            const { offsetX: x, offsetY: y } = event.nativeEvent
            if (mouseDown) {
              setMouseCurr([x, y])
            }
          }}
          onMouseLeave={() => {
            setMouseDown(undefined)
            setMouseCurr(undefined)
          }}
          onMouseUp={() => {
            const elt = mouseoverRef.current
            if (
              elt &&
              mouseDown &&
              mouseCurr &&
              Math.abs(mouseDown[0] - mouseCurr[0]) > 2 &&
              Math.abs(mouseDown[1] - mouseCurr[1]) > 2
            ) {
              const x1 = Math.min(mouseDown[0], mouseCurr[0])
              const x2 = Math.max(mouseDown[0], mouseCurr[0])
              const y1 = Math.min(mouseDown[1], mouseCurr[1])
              const y2 = Math.max(mouseDown[1], mouseCurr[1])
              const { width, height } = elt.getBoundingClientRect()

              const n = vert
                ? {
                    minR: ((maxR - minR) * y1) / height + minR,
                    maxR: ((maxR - minR) * y2) / height + minR,
                    minX: ((maxX - minX) * x1) / width + minX,
                    maxX: ((maxX - minX) * x2) / width + minX,
                  }
                : {
                    minR: ((maxR - minR) * x1) / width + minR,
                    maxR: ((maxR - minR) * x2) / width + minR,
                    minX: ((maxX - minX) * y1) / height + minX,
                    maxX: ((maxX - minX) * y2) / height + minX,
                  }

              store.setMaxX(n.maxX)
              store.setMinX(n.minX)
              store.setMaxR(n.maxR)
              store.setMinR(n.minR)
              setMouseDown(undefined)
              setMouseCurr(undefined)
            } else {
              setMouseDown(undefined)
              setMouseCurr(undefined)
            }
          }}
        />
      </div>
      <p>
        Source code{' '}
        <a href="https://github.com/cmdcolin/logistic_chaos_map">Github</a>.
      </p>
    </div>
  )
}

export default App
