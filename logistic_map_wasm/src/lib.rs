use js_sys::Math;
use wasm_bindgen::prelude::*;
use web_sys::CanvasRenderingContext2d;

#[wasm_bindgen]
pub fn draw(
  ctx: &CanvasRenderingContext2d,
  width: u32,
  height: u32,
  min_r: f64,
  max_r: f64,
  min_x: f64,
  max_x: f64,
) {
  let h = height as f64;
  let w = width as f64;
  let rstep = (max_r - min_r) / w;
  let warmup = Math::floor(Math::pow(1.5, Math::log(1. / (max_r - min_r))) * 1000.) as u32;
  for x in 0..width {
    let r = (x as f64) * rstep + min_r;
    let mut p = Math::random();
    for _ in 0..warmup {
      p = r * p * (1. - p);
    }
    let mut i = 0;
    while i < 500 {
      let y = h * ((p - min_x) / (max_x - min_x));
      let xp = w * ((r - min_r) / (max_r - min_r));
      if y > 0.0 && y < h {
        ctx.fill_rect(xp, y, 0.7, 0.7);
        i = i + 1;
      }
      p = r * p * (1. - p);
    }
  }
}
