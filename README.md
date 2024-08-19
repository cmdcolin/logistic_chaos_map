# logistic_chaos_map

New! now runs as a twitter bot here https://twitter.com/chaosbot80 https://github.com/cmdcolin/twitter_fractal_bot

Renders the [logistic map](https://en.wikipedia.org/wiki/Logistic_map) using a
canvas and some basic JS. It also implements the same logistic map drawing code
in WASM and js

## Screenshot

![](img/1.png)

App

![](img/2.png)

High res export

See https://cmdcolin.github.io/logistic_chaos_map/

## Build

Start a webpack-dev-server for the wasm code

```
## this is the wasm package
cd logistic-map-wasm
yarn serve
```

Start dev server for the app

```
## this is the vite instance
cd app
yarn start
```

To deploy to github pages

```
cd app
yarn deploy
```

## Notes

Older versions used create-react-app but now uses vite (2024)

See [NOTES.md](NOTES.md) for some fun details I discovered while creating this and blogpost showing the basic template of a Rust+WASM+React app https://cmdcolin.github.io/posts/2022-08-22-rustwasm
