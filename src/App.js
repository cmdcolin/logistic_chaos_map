/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { NumberParam, useQueryParams, withDefault } from "use-query-params";
import drawCanvas from "./drawCanvas";

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const initial = {
  minX: 0,
  maxX: 1,
  minR: 2,
  maxR: 4,
};

function App() {
  const [draw, setDraw] = useState();
  const [mouseover, setMouseover] = useState();
  const [params, setParams] = useQueryParams({
    minX: withDefault(NumberParam, 0),
    maxX: withDefault(NumberParam, 1),
    minR: withDefault(NumberParam, 2),
    maxR: withDefault(NumberParam, 4),
  });
  const [mouseDown, setMouseDown] = useState();
  const [mouseCurr, setMouseCurr] = useState();
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState();
  const [useWasm, setUseWasm] = useState(false);
  const [wasm, setWasm] = useState();
  const [proportion, setProportion] = useState(0);

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

  useEffect(() => {
    (async () => {
      if (wasm) {
        const { minX, maxX, minR, maxR } = params;
        if (!draw) {
          return;
        }
        const ctx = draw.getContext("2d");
        if (!ctx) {
          return;
        }
        const { width, height } = draw.getBoundingClientRect();
        draw.width = width;
        draw.height = height;

        setLoading(true);
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = "rgba(0,0,0,0.4)";
        if (useWasm) {
          wasm.draw(ctx, width, height, minR, maxR, minX, maxX);
        } else {
          for (const iter of drawCanvas(
            ctx,
            width,
            height,
            minR,
            maxR,
            minX,
            maxX
          )) {
            setProportion(iter / width);
            await timeout(1);
          }
        }
        setLoading(false);
        setProportion(0);
      }
    })();
  }, [params, draw, wasm, useWasm]);

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
  const { minR, maxR, minX, maxX } = params;

  return (
    <div style={{ margin: 20 }}>
      <h1>
        <a href="https://github.com/cmdcolin/logistic_chaos_map">
          f(x)=rx(x-1)
        </a>
      </h1>
      <p>
        The function above is iterated for values of r between [2,4] and x
        between [0,1] and points where it lands after 1000 initial warm up
        iterations are plotted. Click and drag a region to zoom in.
      </p>
      <label htmlFor="wasm">Draw with WASM</label>
      <input
        id="wasm"
        type="checkbox"
        checked={useWasm}
        onChange={(event) => setUseWasm(event.target.checked)}
      />
      <p>
        Current params: r=[{minR},{maxR}] x=[{minX},{maxX}]
      </p>
      <p>{loading ? `Loading...${proportion.toPrecision(3)}` : null}</p>
      <button
        onClick={() => {
          setParams(initial);
          setCounter(counter + 1);
          setLoading(true);
        }}
      >
        Reset
      </button>
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
          }}
          onMouseUp={() => {
            const x1 = Math.min(mouseDown[0], mouseCurr[0]);
            const x2 = Math.max(mouseDown[0], mouseCurr[0]);
            const y1 = Math.min(mouseDown[1], mouseCurr[1]);
            const y2 = Math.max(mouseDown[1], mouseCurr[1]);
            const { maxR, minR, maxX, minX } = params;
            const { width, height } = mouseover.getBoundingClientRect();

            setParams({
              minR: ((maxR - minR) * x1) / width + minR,
              maxR: ((maxR - minR) * x2) / width + minR,
              minX: ((maxX - minX) * y1) / height + minX,
              maxX: ((maxX - minX) * y2) / height + minX,
            });
            setCounter(counter + 1);
            setMouseDown();
            setMouseCurr();
            setLoading(true);
          }}
        />
      </div>
    </div>
  );
}

export default App;
