# logistic_chaos_map

Renders the [logistic map](https://en.wikipedia.org/wiki/Logistic_map) using a
canvas and some basic JS. It also implements the same logistic map drawing code
in WASM and js

Demo here https://cmdcolin.github.io/logistic_chaos_map/

## Screenshot

![](img/1.png)

## Build

Start a webpack-dev-server for the wasm code

```
## this is the wasm package
cd workspace-a
yarn serve
```

Start a webpack-dev-server for the create-react-app

```
## this is the create-react-app instance
cd workspace-b
yarn start
```

## Notes

The wasm/rust implementation isn't really any faster but it was a fun project.
It was a bit tricky to get the integration with create-react-app right

Important realizations I needed:

- We need to import it the module using dynamic import, not import with the top
  of the file and we perform an `await import('name_of_module')`, not a
  specific filename!
- The name_of_module can be a module published on NPM (as I saw in many
  tutorials ([ex1](https://www.npmjs.com/package/@prichey/hello-wasm)
  [ex2](https://www.npmjs.com/package/wasm-koala-blog) or a yarn workspace
  package [^1]

[^1] It was really confusing to me when I saw these tutorials because they
would claim to teach how to develop a wasm integration, but don't plain out
and say that their module was published on NPM, and don't provide a way to
develop the module locally as far as I could tell. This repo let's you
develop the wasm and js in parallel

## Troubleshooting

Before I found this fix noted above I repeatedly ran into errors that said
things like

```
./src/wasm/index_bg.wasm
Module parse failed: magic header not detected
File was processed with these loaders:
 * ./node_modules/wasm-loader/index.js
You may need an additional loader to handle the result of these loaders.
Error: magic header not detected
```

Or

```
TypeError: _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.draw is not a function
```

Or

```
TypeError: __webpack_require__.e is not a function
```

Also there was a recommendation to use

```
{
  test: /\.wasm$/,
  type: 'javascript/auto',
  loader: 'file-loader',
}
```

This did not work for me.

The key for me was making the wasm pkg folder a proper dependency in
package.json AND importing that same name that you put in the package.json in
the import statement in your js code.
