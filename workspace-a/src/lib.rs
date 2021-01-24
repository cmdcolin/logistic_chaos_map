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
    resolution: u32,
    vertical: bool,
) {
    let h = height as f64;
    let w = width as f64;
    let rstep = (max_r - min_r) / w;
    let warmup = Math::max(
        Math::floor(Math::pow(1.5, Math::log(1. / (max_r - min_r))) * 1000.),
        10000.,
    ) as u32;
    for x in 0..width {
        let r = (x as f64) * rstep + min_r;
        let mut points_drawn = 0;
        let mut tries = 0;
        while points_drawn < resolution && tries < 100 {
            tries = tries + 1;
            let mut p = Math::random();
            for _ in 0..warmup {
                p = r * p * (1. - p);
            }
            if vertical {
                for _ in 1..500 {
                    let y = w * ((p - min_x) / (max_x - min_x));
                    let xp = h * ((r - min_r) / (max_r - min_r));
                    if y > 0.0 && y < w {
                        ctx.fill_rect(y, xp, 0.7, 0.7);
                        points_drawn = points_drawn + 1;
                    }
                    p = r * p * (1. - p);
                }
            } else {
                for _ in 1..500 {
                    let y = h * ((p - min_x) / (max_x - min_x));
                    let xp = w * ((r - min_r) / (max_r - min_r));
                    if y > 0.0 && y < h {
                        ctx.fill_rect(xp, y, 0.7, 0.7);
                        points_drawn = points_drawn + 1;
                    }
                    p = r * p * (1. - p);
                }
            }
        }
    }
}
