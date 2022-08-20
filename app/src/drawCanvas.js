export default function* drawCanvas(
  ctx,
  width,
  height,
  minR,
  maxR,
  minX,
  maxX,
  N,
  vertical,
) {
  if (vertical) {
    yield* drawCanvasVertical(ctx, width, height, minR, maxR, minX, maxX, N)
  } else {
    yield* drawCanvasHoriz(ctx, width, height, minR, maxR, minX, maxX, N)
  }
}

// attempts to draw N points given the params
function* drawCanvasHoriz(ctx, width, height, minR, maxR, minX, maxX, N) {
  const rstep = (maxR - minR) / width
  const warmup = Math.pow(1.5, Math.log(1 / (maxR - minR))) * 1000
  for (let curr = 0; curr < width; curr++) {
    yield curr + 1
    const r = curr * rstep + minR
    let p = Math.random()
    for (let i = 0; i < Math.max(warmup, 10000); i++) {
      p = r * p * (1 - p)
    }
    for (
      let pointsDrawn = 0, tries = 0;
      pointsDrawn < N && tries < 100;
      tries++
    ) {
      for (let i = 0; i < 500; i++) {
        const y = height * ((p - minX) / (maxX - minX))
        const x = width * ((r - minR) / (maxR - minR))
        if (y > 0 && y < height) {
          ctx.fillRect(x, y, 0.7, 0.7)
          pointsDrawn++
        }
        p = r * p * (1 - p)
      }
    }
  }
}

// attempts to draw N points given the params
function* drawCanvasVertical(ctx, width, height, minR, maxR, minX, maxX, N) {
  const rstep = (maxR - minR) / width
  const warmup = Math.pow(1.5, Math.log(1 / (maxR - minR))) * 1000
  for (let curr = 0; curr < width; curr++) {
    yield curr + 1
    const r = curr * rstep + minR
    let p = Math.random()
    for (let i = 0; i < Math.max(warmup, 10000); i++) {
      p = r * p * (1 - p)
    }
    for (
      let pointsDrawn = 0, tries = 0;
      pointsDrawn < N && tries < 100;
      tries++
    ) {
      for (let i = 0; i < 500; i++) {
        const x = width * ((p - minX) / (maxX - minX))
        const y = height * ((r - minR) / (maxR - minR))
        if (x > 0 && x < width) {
          ctx.fillRect(x, y, 0.7, 0.7)
          pointsDrawn++
        }
        p = r * p * (1 - p)
      }
    }
  }
}
