// split vertical and horizontal drawing, avoid branch in tight loop (superstitious)
export default function* drawCanvas(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  minR: number,
  maxR: number,
  minX: number,
  maxX: number,
  vertical: boolean,
  M: number,
  N: number,
) {
  yield* vertical
    ? drawCanvasVertical(ctx, width, height, minR, maxR, minX, maxX, M, N)
    : drawCanvasHoriz(ctx, width, height, minR, maxR, minX, maxX, M, N)
}

// attempts to draw N points given the params, with a limit of trying M times
// (avoid infinite loop in empty spaces, etc)
function* drawCanvasHoriz(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  minR: number,
  maxR: number,
  minX: number,
  maxX: number,
  M: number,
  N: number,
) {
  const rstep = (maxR - minR) / width
  const warmup = 1.5 ** Math.log(1 / (maxR - minR)) * 1000
  for (let curr = 0; curr < width; curr++) {
    yield curr + 1
    const r = curr * rstep + minR
    let p = Math.random()
    for (let i = 0; i < Math.max(warmup, 10_000); i++) {
      p = r * p * (1 - p)
    }
    for (
      let pointsDrawn = 0, tries = 0;
      pointsDrawn < N && tries < M;
      tries++
    ) {
      const y = height * ((p - minX) / (maxX - minX))
      const x = width * ((r - minR) / (maxR - minR))
      if (y > 0 && y < height) {
        ctx.fillRect(x, y, 1, 1)
        pointsDrawn++
      }
      p = r * p * (1 - p)
    }
  }
}

// attempts to draw N points given the params, with a limit of trying M times
// (avoid infinite loop in empty spaces, etc)
function* drawCanvasVertical(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  minR: number,
  maxR: number,
  minX: number,
  maxX: number,
  M: number,
  N: number,
) {
  const rstep = (maxR - minR) / width
  const warmup = 1.5 ** Math.log(1 / (maxR - minR)) * 1000
  for (let curr = 0; curr < width; curr++) {
    yield curr + 1
    const r = curr * rstep + minR
    let p = Math.random()
    for (let i = 0; i < Math.max(warmup, 10_000); i++) {
      p = r * p * (1 - p)
    }
    for (
      let pointsDrawn = 0, tries = 0;
      pointsDrawn < N && tries < M;
      tries++
    ) {
      const x = width * ((p - minX) / (maxX - minX))
      const y = height * ((r - minR) / (maxR - minR))
      if (x > 0 && x < width) {
        ctx.fillRect(x, y, 1, 1)
        pointsDrawn++
      }
      p = r * p * (1 - p)
    }
  }
}
