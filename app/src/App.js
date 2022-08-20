import './App.css'
import { useEffect, useState } from 'react'
import drawCanvas from './drawCanvas'
import saveAs from 'file-saver'

const p = new URLSearchParams(window.location.search)

function App() {
  const [draw, setDraw] = useState()
  const [mouseover, setMouseover] = useState()

  // url params
  const [minX, setMinX] = useState(+(p.get('minX') ?? 0))
  const [maxX, setMaxX] = useState(+(p.get('maxX') ?? 1))
  const [minR, setMinR] = useState(+(p.get('minR') ?? 2))
  const [maxR, setMaxR] = useState(+(p.get('maxR') ?? 4))
  const [M, setM] = useState(+(p.get('M') ?? 50000))
  const [opacity, setOpacity] = useState(+(p.get('opacity') ?? 0.3))
  const [N, setN] = useState(+(p.get('N') ?? 1000))
  const [animate, setAnimate] = useState(JSON.parse(p.get('animate') ?? true))
  const [useWasm, setUseWasm] = useState(JSON.parse(p.get('useWasm') ?? false))
  const [vert, setVert] = useState(JSON.parse(p.get('vert') ?? false))
  const [scaleFactor, setScaleFactor] = useState(+(p.get('scaleFactor') ?? 2))

  // internal states
  const [mouseDown, setMouseDown] = useState()
  const [mouseDownTime, setMouseDownTime] = useState()
  const [mouseCurr, setMouseCurr] = useState()
  const [loading, setLoading] = useState(true)
  const [wasm, setWasm] = useState()
  const [proportion, setProportion] = useState(0)
  const [time, setTime] = useState(0)

  useEffect(() => {
    const p = {
      useWasm,
      minX,
      maxX,
      minR,
      maxR,
      opacity,
      N,
      animate,
      vert,
      scaleFactor,
    }
    window.history.replaceState(
      p,
      '',
      `${window.location.pathname}?${new URLSearchParams(p)}`,
    )
  }, [minX, maxX, minR, maxR, scaleFactor, animate, vert, opacity, useWasm, N])

  useEffect(() => {
    ;(async () => {
      try {
        const wasm = await import('logistic-map-wasm')
        setWasm(wasm)
      } catch (e) {
        console.error(e)
      }
    })()
  }, [])

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      if (
        wasm &&
        !Number.isNaN(+scaleFactor) &&
        !Number.isNaN(+opacity) &&
        !Number.isNaN(+N) &&
        !Number.isNaN(+M)
      ) {
        if (!draw) {
          return
        }
        const ctx = draw.getContext('2d')
        if (!ctx) {
          return
        }
        const { width, height } = draw.getBoundingClientRect()
        const factor = +scaleFactor
        draw.width = width * factor
        draw.height = height * factor

        setLoading(true)
        setProportion(0)
        setTimeout(async () => {
          ctx.fillStyle = 'white'
          ctx.fillRect(0, 0, width * factor, height * factor)
          ctx.fillStyle = `rgba(0,0,0,${+opacity})`
          const startTime = +Date.now()
          if (useWasm) {
            wasm.draw(
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
            )
          } else {
            let lastTime = +Date.now()
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
                if (+Date.now() - lastTime > 10) {
                  await new Promise(resolve => setTimeout(resolve, 0))
                  lastTime = +Date.now()
                }
              }
              if (cancelled) {
                break
              }
            }
          }
          setTime(+Date.now() - startTime)

          //if !cancelled seems to be a race condition?
          if (!cancelled) {
            setLoading(false)
            setProportion(0)
          }
        }, 100)
      }
    })()
    return () => {
      cancelled = true
    }
  }, [
    minR,
    maxR,
    minX,
    maxX,
    scaleFactor,
    vert,
    animate,
    useWasm,
    opacity,
    N,
    draw,
    wasm,
  ])

  useEffect(() => {
    if (!mouseover) {
      return
    }
    const ctx = mouseover.getContext('2d')
    if (!ctx) {
      return
    }
    const { width, height } = mouseover.getBoundingClientRect()
    mouseover.width = width
    mouseover.height = height
    if (mouseDown) {
      ctx.clearRect(0, 0, width, height)
      const [x1, y1] = mouseDown
      const [x2, y2] = mouseCurr
      ctx.fillStyle = 'rgba(255,0,0,0.3)'
      ctx.fillRect(x1, y1, x2 - x1, y2 - y1)
    }
  }, [mouseDown, mouseCurr, mouseover])

  return (
    <div style={{ margin: 20 }}>
      <h1>f(x)=rx(x-1)</h1>
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
        The scale factor makes the canvas size larger, allowing the code to
        render higher N (larger) images. Increasing M and N can allow rendering
        denser fractals at high zoom levels.
      </p>
      <p>
        Note: my main goal when starting this project was to demonstrate using
        wasm+react in a monorepo in a basic way. The source code is here{' '}
        <a href="https://github.com/cmdcolin/logistic_chaos_map">Github</a>. The
        wasm drawing mode is not faster and doesn't provide the
        animation/progress bar but may be able to be improved. Also note, the
        work is done on the main thread so the browser may hang if animation is
        not used
      </p>
      <div className="controls">
        <div className="block">
          <label htmlFor="opacity">Opacity</label>
          <input
            id="opacity"
            type="text"
            value={opacity}
            onChange={event => setOpacity(event.target.value)}
          />
        </div>
        <div className="block">
          <label htmlFor="N">N</label>
          <input
            id="N"
            type="text"
            value={N}
            onChange={event => setN(event.target.value)}
          />
        </div>
        <div className="block">
          <label htmlFor="M">M</label>
          <input
            id="M"
            type="text"
            value={M}
            onChange={event => setM(event.target.value)}
          />
        </div>
        <div className="block">
          <label htmlFor="scalefactor">Scale factor</label>
          <input
            id="scalefactor"
            type="text"
            value={scaleFactor}
            onChange={event => setScaleFactor(event.target.value)}
          />
        </div>

        <div className="block">
          <label htmlFor="wasm">Draw with WASM</label>
          <input
            id="wasm"
            type="checkbox"
            checked={useWasm}
            onChange={event => setUseWasm(event.target.checked)}
          />
        </div>
        <div className="block">
          <label htmlFor="vert">Vertical</label>
          <input
            id="vert"
            type="checkbox"
            checked={vert}
            onChange={event => setVert(event.target.checked)}
          />
        </div>
        {!useWasm ? (
          <div className="block">
            <label htmlFor="animate">Animate?</label>
            <input
              id="animate"
              disabled={useWasm}
              type="checkbox"
              checked={animate}
              onChange={event => setAnimate(event.target.checked)}
            />
          </div>
        ) : null}
        <p>
          {loading
            ? `Loading...${
                proportion ? (proportion * 100).toPrecision(3) + '%' : ''
              }`
            : null}
        </p>
        <button
          onClick={() => draw.toBlob(b => saveAs(b, `frac_${+Date.now()}.png`))}
        >
          Save as PNG
        </button>

        <button
          onClick={() => {
            setMaxX(1)
            setMinX(0)
            setMinR(2)
            setMaxR(4)
          }}
        >
          Reset
        </button>
        {loading ? null : <p>Render time: {time / 1000}s</p>}
      </div>
      <div style={{ position: 'relative' }}>
        <canvas
          ref={ref => setDraw(ref)}
          style={{
            background: 'white',
            width: '100%',
            height: '100vh',
            position: 'absolute',
            left: 0,
            top: 0,
          }}
        />
        <canvas
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100vh',
            cursor: 'crosshair',
            zIndex: 1000,
          }}
          ref={ref => setMouseover(ref)}
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
            setMouseDown()
            setMouseCurr()
            setMouseDownTime(+Date.now())
          }}
          onMouseUp={() => {
            if (
              +Date.now() - mouseDownTime > 100 &&
              mouseDown &&
              mouseCurr &&
              Math.abs(mouseDown[0] - mouseCurr[0]) > 3 &&
              Math.abs(mouseDown[1] - mouseCurr[1]) > 3
            ) {
              const x1 = Math.min(mouseDown[0], mouseCurr[0])
              const x2 = Math.max(mouseDown[0], mouseCurr[0])
              const y1 = Math.min(mouseDown[1], mouseCurr[1])
              const y2 = Math.max(mouseDown[1], mouseCurr[1])
              const { width, height } = mouseover.getBoundingClientRect()

              const n = !vert
                ? {
                    minR: ((maxR - minR) * x1) / width + minR,
                    maxR: ((maxR - minR) * x2) / width + minR,
                    minX: ((maxX - minX) * y1) / height + minX,
                    maxX: ((maxX - minX) * y2) / height + minX,
                  }
                : {
                    minR: ((maxR - minR) * y1) / height + minR,
                    maxR: ((maxR - minR) * y2) / height + minR,
                    minX: ((maxX - minX) * x1) / width + minX,
                    maxX: ((maxX - minX) * x2) / width + minX,
                  }

              setMaxX(n.maxX)
              setMinX(n.minX)
              setMaxR(n.maxR)
              setMinR(n.minR)
              setMouseDown()
              setMouseCurr()
            } else {
              setMouseDownTime()
              setMouseDown()
              setMouseCurr()
            }
          }}
        />
      </div>
    </div>
  )
}

export default App
