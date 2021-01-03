# logistic_chaos_map

Renders the [logistic map](https://en.wikipedia.org/wiki/Logistic_map) using a
canvas and some basic JS

Instance here https://cmdcolin.github.io/logistic_chaos_map/

## Build

```
cd logistic_map_wasm
wasm-pack build
cd ..
yarn start
```

Note if you change any wasm code, perform

`rm -rf node_modules/logistic_map_wasm; yarn; yarn start`

Working on a smoother workflow still

## Notes

The wasm implementation was added early 2020. I googled a million times "wasm
create-react-app" and stumbled through tons of stackoverflow threads, and then
found various posts with their published source code referring to their demo
wasm package on NPM ([ex1](https://www.npmjs.com/package/@prichey/hello-wasm)
[ex2](https://www.npmjs.com/package/wasm-koala-blog) those are from popular
wasm-in-create-react-app articles) and I was like, why can I not get a
development local build of this to work without publishing my package? It does
require that I have the wasm package that we import in src/App.js to exist in
package.json

Before I found this fix I repeatedly ran into errors that said things like

```
./src/wasm/index_bg.wasm
Module parse failed: magic header not detected
File was processed with these loaders:
 * ./node_modules/wasm-loader/index.js
You may need an additional loader to handle the result of these loaders.
Error: magic header not detected
```
