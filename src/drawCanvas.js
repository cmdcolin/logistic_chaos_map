export default function* drawCanvas(
  ctx,
  width,
  height,
  minR,
  maxR,
  minX,
  maxX,
  resolution,
  vertical
) {
  const rstep = (maxR - minR) / width;
  const warmup = Math.pow(1.5, Math.log(1 / (maxR - minR))) * 1000;
  for (let x = 0; x < width; x++) {
    yield x + 1;
    const r = x * rstep + minR;
    for (
      let pointsDrawn = 0, tries = 0;
      pointsDrawn < resolution && tries < 100;
      tries++
    ) {
      let p = Math.random();
      for (let i = 0; i < Math.max(warmup, 10000); i++) {
        p = r * p * (1 - p);
      }

      if (vertical) {
        for (let i = 0; i < 500; i++) {
          const y = width * ((p - minX) / (maxX - minX));
          const xp = height * ((r - minR) / (maxR - minR));
          if (y > 0 && y < width) {
            ctx.fillRect(y, xp, 0.7, 0.7);
            pointsDrawn++;
          }
          p = r * p * (1 - p);
        }
      } else {
        for (let i = 0; i < 500; i++) {
          const y = height * ((p - minX) / (maxX - minX));
          const xp = width * ((r - minR) / (maxR - minR));
          if (y > 0 && y < height) {
            ctx.fillRect(xp, y, 0.7, 0.7);
            pointsDrawn++;
          }
          p = r * p * (1 - p);
        }
      }
    }
  }
}
