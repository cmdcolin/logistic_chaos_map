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
  let rstep = (max_r - min_r) as f64 / width as f64;
  for x in 0..width {
    let xf = x as f64;
    let r = xf * rstep + min_r;
    let mut p = Math::random();
    for _ in 0..1000 {
      p = r * p * (1. - p);
    }
    for _ in 1..200 {
      let rho = h * ((p - min_x) / (max_x - min_x));
      if rho > 0.0 && rho < h {
        ctx.fill_rect(x as f64, rho, 1., 1.)
      }
      p = r * p * (1. - p);
    }
  }
}
