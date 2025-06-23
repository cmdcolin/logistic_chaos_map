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
  // Precalculate constants outside the loops
  const rstep = (maxR - minR) / width
  const warmup = 1.5 ** Math.log(1 / (maxR - minR)) * 1000
  const warmupIterations = Math.max(warmup, 10_000)
  const heightScale = height / (maxX - minX)
  const widthScale = width / (maxR - minR)

  for (let curr = 0; curr < width; curr++) {
    yield curr + 1
    const r = curr * rstep + minR
    let p = Math.random()

    // Warmup phase - stabilize the chaotic system
    for (let i = 0; i < warmupIterations; i++) {
      p = r * p * (1 - p)
    }

    // Precalculate the x-coordinate since it's constant for this column
    const x = widthScale * (r - minR)

    for (
      let pointsDrawn = 0, tries = 0;
      pointsDrawn < N && tries < M;
      tries++
    ) {
      // Optimize coordinate calculations
      const y = heightScale * (p - minX)

      if (y > 0 && y < height) {
        ctx.fillRect(x, y, 1, 1)
        pointsDrawn++
      }

      // Logistic map iteration
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
  // Precalculate constants outside the loops
  const rstep = (maxR - minR) / width
  const warmup = 1.5 ** Math.log(1 / (maxR - minR)) * 1000
  const warmupIterations = Math.max(warmup, 10_000)
  const widthScale = width / (maxX - minX)
  const heightScale = height / (maxR - minR)

  for (let curr = 0; curr < width; curr++) {
    yield curr + 1
    const r = curr * rstep + minR
    let p = Math.random()

    // Warmup phase - stabilize the chaotic system
    for (let i = 0; i < warmupIterations; i++) {
      p = r * p * (1 - p)
    }

    // Precalculate the y-coordinate since it's constant for this column
    const y = heightScale * (r - minR)

    for (
      let pointsDrawn = 0, tries = 0;
      pointsDrawn < N && tries < M;
      tries++
    ) {
      // Optimize coordinate calculations
      const x = widthScale * (p - minX)

      if (x > 0 && x < width) {
        ctx.fillRect(x, y, 1, 1)
        pointsDrawn++
      }

      // Logistic map iteration
      p = r * p * (1 - p)
    }
  }
}
