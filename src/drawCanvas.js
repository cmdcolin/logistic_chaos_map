export default function drawCanvas(ctx, width, height, minR, maxR, minX, maxX) {
  const rstep = (maxR - minR) / width;
  for (let x = 0; x < width; x++) {
    const r = x * rstep + minR;
    let p = Math.random();
    for (let i = 0; i < 1000; i++) {
      p = r * p * (1 - p);
    }
    for (let i = 0; i < 200; i++) {
      const y = height * ((p - minX) / (maxX - minX));
      const xp = width * ((r - minR) / (maxR - minR));
      if (y > 0 && y < height) {
        ctx.fillRect(xp, y, 0.7, 0.7);
      }
      p = r * p * (1 - p);
    }
  }
}
