export default function drawCanvas(ctx, width, height, minR, maxR, minX, maxX) {
  const rstep = (maxR - minR) / width;
  const warmup = Math.pow(1.5, Math.log(1 / (maxR - minR))) * 1000;
  for (let x = 0; x < width; x++) {
    const r = x * rstep + minR;
    let p = Math.random();
    for (let i = 0; i < Math.max(warmup, 10000); i++) {
      p = r * p * (1 - p);
    }
    for (let i = 0; i < 500; ) {
      const y = height * ((p - minX) / (maxX - minX));
      const xp = width * ((r - minR) / (maxR - minR));
      if (y > 0 && y < height) {
        ctx.fillRect(xp, y, 0.7, 0.7);
        i++;
      }
      p = r * p * (1 - p);
    }
  }
}
