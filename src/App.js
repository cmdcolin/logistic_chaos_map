/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

const initial = {
  minX: 0,
  maxX: 1,
  minR: 2,
  maxR: 4,
};
function App() {
  const [draw, setDraw] = useState();
  const [mouseover, setMouseover] = useState();
  const [params, setParams] = useState(initial);
  const [mouseDown, setMouseDown] = useState();
  const [mouseCurr, setMouseCurr] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { minX, maxX, minR, maxR } = params;
    if (!draw) return;
    const ctx = draw.getContext("2d");
    if (!ctx) return;
    const { width, height } = draw.getBoundingClientRect();
    draw.width = width;
    draw.height = height;
    function drawCanvas() {
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = "rgba(0,0,0,0.1)";
      const rstep = (maxR - minR) / width;
      const xstep = (maxX - minX) / height;
      for (let r = minR; r < maxR; r += rstep) {
        for (let p = minX; p < maxX; p += xstep * 10) {
          let x = p;
          for (let i = 0; i < 1000; i++) {
            x = r * x * (1 - x);
          }
          for (let i = 0; i < 20; i++) {
            ctx.fillRect(
              width * ((r - minR) / (maxR - minR)),
              height * ((x - minX) / (maxX - minX)),
              0.7,
              0.7
            );
            x = r * x * (1 - x);
          }
        }
      }
    }

    requestIdleCallback(() => {
      drawCanvas();
      setLoading(false);
    });
  }, [params, draw]);

  useEffect(() => {
    if (!mouseover) return;
    const ctx = mouseover.getContext("2d");
    if (!ctx) return;
    const { width, height } = mouseover.getBoundingClientRect();
    mouseover.width = width;
    mouseover.height = height;
    if (loading) {
      ctx.clearRect(0, 0, width, height);
      ctx.font = "100px Verdana";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("Loading...", width / 2, height / 2);
    }
    if (mouseDown) {
      ctx.clearRect(0, 0, width, height);
      const [x1, y1] = mouseDown;
      const [x2, y2] = mouseCurr;
      ctx.fillStyle = "rgba(255,0,0,0.3)";
      ctx.fillRect(x1, y1, x2 - x1, y2 - y1);
    }
  }, [mouseDown, mouseCurr, mouseover, loading]);
  const { minR, maxR, minX, maxX } = params;

  return (
    <div style={{ margin: 20 }}>
      <h1>f(x)=rx(x-1)</h1>
      <p>
        The function above is iterated for values of r between [2,4] and x
        between [0,1] and points where it lands after 100 initial warm up
        iterations are plotted
      </p>
      <p>
        Current params: r=[{minR},{maxR}] x=[{minX},{maxX}]
      </p>
      <button onClick={() => setParams(initial)}>Reset</button>
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
            zIndex: 100,
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
          onMouseLeave={(event) => {
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
