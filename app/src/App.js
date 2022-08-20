/* eslint-disable no-unused-vars */
import "./App.css";
import { useEffect, useState } from "react";
import drawCanvas from "./drawCanvas";
import saveAs from "file-saver";

const p = new URLSearchParams(window.location.search);

function App() {
  const [draw, setDraw] = useState();
  const [mouseover, setMouseover] = useState();

  const [minX, setMinX] = useState(+(p.get("minX") ?? 0));
  const [maxX, setMaxX] = useState(+(p.get("maxX") ?? 1));
  const [minR, setMinR] = useState(+(p.get("minR") ?? 2));
  const [maxR, setMaxR] = useState(+(p.get("maxR") ?? 4));
  const [opacity, setOpacity] = useState(+(p.get("opacity") ?? 0.3));
  const [resolution, setResolution] = useState(+(p.get("resolution") ?? 1000));
  const [animate, setAnimate] = useState(JSON.parse(p.get("animate") ?? true));
  const [drawWithWasm, setDrawWithWasm] = useState(
    JSON.parse(p.get("drawWithWasm") ?? false)
  );
  const [vertical, setVertical] = useState(
    JSON.parse(p.get("vertical") ?? false)
  );
  const [scaleFactor, setScaleFactor] = useState(+(p.get("scaleFactor") ?? 2));

  const [mouseDown, setMouseDown] = useState();
  const [mouseDownTime, setMouseDownTime] = useState();
  const [mouseCurr, setMouseCurr] = useState();
  const [loading, setLoading] = useState(true);
  const [wasm, setWasm] = useState();
  const [proportion, setProportion] = useState(0);

  useEffect(() => {
    const p = {
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
    };
    const params = new URLSearchParams(p);
    window.history.pushState(
      p,
      "",
      window.location.pathname + "?" + params.toString()
    );
  }, [
    minX,
    maxX,
    minR,
    maxR,
    scaleFactor,
    animate,
    vertical,
    opacity,
    drawWithWasm,
    resolution,
  ]);

  useEffect(() => {
    (async () => {
      try {
        const wasm = await import("logistic-map-wasm");
        setWasm(wasm);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const factor = +scaleFactor;
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
                await new Promise((resolve) => setTimeout(resolve, 1));
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
    scaleFactor,
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
      <p>
        Note: my main goal when starting this project was to demonstrate using
        wasm+react in a monorepo in a basic way. The source code is here{" "}
        <a href="https://github.com/cmdcolin/logistic_chaos_map">Github</a>. The
        wasm drawing mode is not faster and doesn't provide the
        animation/progress bar but may be able to be improved.
      </p>
      <div className="controls">
        <div className="block">
          <label htmlFor="opacity">Opacity</label>
          <input
            id="opacity"
            type="text"
            value={opacity}
            onChange={(event) => setOpacity(event.target.value)}
          />
        </div>
        <div className="block">
          <label htmlFor="resolution">N</label>
          <input
            id="resolution"
            type="text"
            value={resolution}
            onChange={(event) => setResolution(event.target.value)}
          />
        </div>
        <div className="block">
          <label htmlFor="scalefactor">Scale factor</label>
          <input
            id="scalefactor"
            type="text"
            value={scaleFactor}
            onChange={(event) => setScaleFactor(event.target.value)}
          />
        </div>

        <div className="block">
          <label htmlFor="wasm">Draw with WASM</label>
          <input
            id="wasm"
            type="checkbox"
            checked={drawWithWasm}
            onChange={(event) => setDrawWithWasm(event.target.checked)}
          />
        </div>
        <div className="block">
          <label htmlFor="vertical">Vertical</label>
          <input
            id="vertical"
            type="checkbox"
            checked={vertical}
            onChange={(event) => setVertical(event.target.checked)}
          />
        </div>
        {!drawWithWasm ? (
          <div className="block">
            <label htmlFor="animate">Animate?</label>
            <input
              id="animate"
              disabled={drawWithWasm}
              type="checkbox"
              checked={animate}
              onChange={(event) => setAnimate(event.target.checked)}
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
          onClick={() =>
            draw.toBlob((blob) =>
              saveAs(blob, `logistic_map_${+Date.now()}.png`)
            )
          }
        >
          Save as PNG
        </button>

        <button
          onClick={() => {
            setMaxX(1);
            setMinX(0);
            setMinR(2);
            setMaxR(4);
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
              const x1 = Math.min(mouseDown[0], mouseCurr[0]);
              const x2 = Math.max(mouseDown[0], mouseCurr[0]);
              const y1 = Math.min(mouseDown[1], mouseCurr[1]);
              const y2 = Math.max(mouseDown[1], mouseCurr[1]);
              const { width, height } = mouseover.getBoundingClientRect();

              const n = !vertical
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

              setMaxX(n.maxX);
              setMinX(n.minX);
              setMaxR(n.maxR);
              setMinR(n.minR);
              setMouseDown();
              setMouseCurr();
            } else {
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
