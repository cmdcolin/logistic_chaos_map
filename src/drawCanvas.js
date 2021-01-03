export default function drawCanvas(ctx, width, height, minR, maxR, minX, maxX) {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = `rgba(0,0,0,0.4)`;
  const rstep = (maxR - minR) / width;
  const xstep = (maxX - minX) / height;
  for (let r = minR; r < maxR; r += rstep) {
    for (let p = minX; p < maxX; p += xstep * 10) {
      let x = p;
      for (let i = 0; i < 1000; i++) {
        x = r * x * (1 - x);
      }
      for (let i = 0; i < 20; i++) {
        const y = height * ((x - minX) / (maxX - minX));
        if (y > 0 && y < height) {
          ctx.fillRect(width * ((r - minR) / (maxR - minR)), y, 0.7, 0.7);
        }
        x = r * x * (1 - x);
      }
    }
  }
}
