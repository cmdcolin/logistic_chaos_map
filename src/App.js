/* eslint-disable no-unused-vars */
import "./App.css";
import { useCallback, useEffect, useState } from "react";
import {
  BooleanParam,
  NumberParam,
  StringParam,
  useQueryParams,
  withDefault,
} from "use-query-params";
import drawCanvas from "./drawCanvas";
import saveAs from "file-saver";

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function useForceUpdate() {
  const [, setTick] = useState(0);
  const update = useCallback(() => {
    setTick((tick) => tick + 1);
  }, []);
  return update;
}

function App() {
  const [draw, setDraw] = useState();
  const [mouseover, setMouseover] = useState();
  const [params, setParams] = useQueryParams({
    minX: withDefault(NumberParam, 0),
    maxX: withDefault(NumberParam, 1),
    minR: withDefault(NumberParam, 2),
    maxR: withDefault(NumberParam, 4),
    opacity: withDefault(StringParam, "0.3"),
    resolution: withDefault(StringParam, "1000"),
    animate: withDefault(BooleanParam, true),
    drawWithWasm: withDefault(BooleanParam, false),
    vertical: withDefault(BooleanParam, false),
    scaleFactor: withDefault(StringParam, "2"),
  });
  const [mouseDown, setMouseDown] = useState();
  const [mouseDownTime, setMouseDownTime] = useState();
  const [mouseCurr, setMouseCurr] = useState();
  const [loading, setLoading] = useState(true);
  const [wasm, setWasm] = useState();
  const [proportion, setProportion] = useState(0);
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    (async () => {
      try {
        const wasm = await import("logistic_map_wasm");
        setWasm(wasm);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  const {
    drawWithWasm,
    minX,
    maxX,
    minR,
    maxR,
    opacity,
    resolution,
    animate,
    vertical,
    scaleFactor,
  } = params;
  const factor = +scaleFactor;
  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (
        wasm &&
        !Number.isNaN(factor) &&
        !Number.isNaN(+opacity) &&
        !Number.isNaN(+resolution)
      ) {
        if (!draw) {
          return;
        }
        const ctx = draw.getContext("2d");
        if (!ctx) {
          return;
        }
        const { width, height } = draw.getBoundingClientRect();
        draw.width = width * factor;
        draw.height = height * factor;

        setLoading(true);
        setProportion(0);
        setTimeout(async () => {
          ctx.fillStyle = "white";
          ctx.fillRect(0, 0, width * factor, height * factor);
          ctx.fillStyle = `rgba(0,0,0,${+opacity})`;
          if (drawWithWasm) {
            wasm.draw(
              ctx,
              width * factor,
              height * factor,
              minR,
              maxR,
              minX,
              maxX,
              +resolution,
              vertical
            );
          } else {
            for (const iter of drawCanvas(
              ctx,
              width * factor,
              height * factor,
              minR,
              maxR,
              minX,
              maxX,
              +resolution,
              vertical
            )) {
              if (animate) {
                setProportion(iter / (width * factor));
                await timeout(1);
              }
              if (cancelled) {
                break;
              }
            }
          }

          //if !cancelled seems to be a race condition?
          if (!cancelled) {
            setLoading(false);
            setProportion(0);
          }
        }, 100);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [
    minR,
    maxR,
    minX,
    maxX,
    factor,
    vertical,
    animate,
    drawWithWasm,
    opacity,
    resolution,
    draw,
    wasm,
  ]);

  useEffect(() => {
    if (!mouseover) {
      return;
    }
    const ctx = mouseover.getContext("2d");
    if (!ctx) {
      return;
    }
    const { width, height } = mouseover.getBoundingClientRect();
    mouseover.width = width;
    mouseover.height = height;
    if (mouseDown) {
      ctx.clearRect(0, 0, width, height);
      const [x1, y1] = mouseDown;
      const [x2, y2] = mouseCurr;
      ctx.fillStyle = "rgba(255,0,0,0.3)";
      ctx.fillRect(x1, y1, x2 - x1, y2 - y1);
    }
  }, [mouseDown, mouseCurr, mouseover]);

  return (
    <div style={{ margin: 20 }}>
      <h1>
        <a href="https://github.com/cmdcolin/logistic_chaos_map">
          f(x)=rx(x-1)
        </a>
      </h1>
      <p>
        The function above is iterated for values of r between [2,4] and x
        between [0,1] and points. Click and drag a region to zoom in. The
        program iterates until it draws N points in the zoomed in region, which
        results in higher computation time at zoomed in values. When zoomed in,
        it has to iterate the logistic map longer to find that many points to
        draw resulting in it being slower when zoomed in. The scale factor makes
        the canvas size larger, allowing the code to render higher resolution
        (larger) images.
      </p>
      <div className="controls">
        <div className="block">
          <label htmlFor="opacity">Opacity</label>
          <input
            id="opacity"
            type="text"
            value={opacity}
            onChange={(event) => {
              setParams({ ...params, opacity: event.target.value });
              forceUpdate();
            }}
          />
        </div>
        <div className="block">
          <label htmlFor="resolution">N</label>
          <input
            id="resolution"
            type="text"
            value={resolution}
            onChange={(event) => {
              setParams({ ...params, resolution: event.target.value });
              forceUpdate();
            }}
          />
        </div>
        <div className="block">
          <label htmlFor="scalefactor">Scale factor</label>
          <input
            id="scalefactor"
            type="text"
            value={scaleFactor}
            onChange={(event) => {
              setParams({ ...params, scaleFactor: event.target.value });
              forceUpdate();
            }}
          />
        </div>

        <div className="block">
          <label htmlFor="wasm">Draw with WASM</label>
          <input
            id="wasm"
            type="checkbox"
            checked={drawWithWasm}
            onChange={(event) => {
              setParams({ ...params, drawWithWasm: event.target.checked });
              forceUpdate();
            }}
          />
        </div>
        <div className="block">
          <label htmlFor="vertical">Vertical</label>
          <input
            id="vertical"
            type="checkbox"
            checked={vertical}
            onChange={(event) => {
              setParams({ ...params, vertical: event.target.checked });
              forceUpdate();
            }}
          />
        </div>
        {!drawWithWasm ? (
          <div className="block">
            <label htmlFor="animate">Animate?</label>
            <input
              id="animate"
              disabled={drawWithWasm}
              type="checkbox"
              checked={params.animate}
              onChange={(event) => {
                setParams({ ...params, animate: event.target.checked });
                forceUpdate();
              }}
            />
          </div>
        ) : null}
        <p>
          {loading
            ? `Loading...${
                proportion ? (proportion * 100).toPrecision(3) + "%" : ""
              }`
            : null}
        </p>
        <button
          onClick={() => {
            draw.toBlob(function (blob) {
              saveAs(blob, `logistic_map_${+Date.now()}.png`);
            });
          }}
        >
          Save as PNG
        </button>

        <button
          onClick={() => {
            setParams({
              ...params,
              minX: 0,
              maxX: 1,
              minR: 2,
              maxR: 4,
            });
            forceUpdate();
          }}
        >
          Reset
        </button>
      </div>
      <div style={{ position: "relative" }}>
        <canvas
          ref={(ref) => setDraw(ref)}
          style={{
            background: "white",
            width: "100%",
            height: "100vh",
            position: "absolute",
            left: 0,
            top: 0,
          }}
        />
        <canvas
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100vh",
            zIndex: 1000,
          }}
          ref={(ref) => setMouseover(ref)}
          onMouseDown={(event) => {
            const { offsetX: x, offsetY: y } = event.nativeEvent;
            setMouseDown([x, y]);
            setMouseCurr([x, y]);
          }}
          onMouseMove={(event) => {
            const { offsetX: x, offsetY: y } = event.nativeEvent;
            if (mouseDown) {
              setMouseCurr([x, y]);
            }
          }}
          onMouseLeave={() => {
            setMouseDown();
            setMouseCurr();
            setMouseDownTime(+Date.now());
          }}
          onMouseUp={() => {
            if (+Date.now() - mouseDownTime > 100) {
              console.log("t1");
              const x1 = Math.min(mouseDown[0], mouseCurr[0]);
              const x2 = Math.max(mouseDown[0], mouseCurr[0]);
              const y1 = Math.min(mouseDown[1], mouseCurr[1]);
              const y2 = Math.max(mouseDown[1], mouseCurr[1]);
              const { width, height } = mouseover.getBoundingClientRect();

              const newParams = !vertical
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
                  };
              setParams({
                ...params,
                ...newParams,
              });
              forceUpdate();
              setMouseDown();
              setMouseCurr();
            } else {
              console.log("t2");
              setMouseDownTime();
              setMouseDown();
              setMouseCurr();
            }
          }}
        />
      </div>
    </div>
  );
}

export default App;
