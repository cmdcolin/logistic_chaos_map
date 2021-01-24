# Notes

The wasm/rust implementation isn't really any faster but it was a fun project.
It was a bit tricky to get the integration with create-react-app right

The tutorial at https://rustwasm.github.io/wasm-bindgen/ is a great starting
point and I highly recommend going through the tutorial, but it was still a
journey following this to integrate it with create-react-app

## Important realizations to integrate create-react-app+wasm

- We need to import the module using dynamic import, not import with the top of
  the file and we use the name of the module e.g. `await import('name_of_module')`, not a specific filename!
- The name_of_module can be a module published on NPM or a yarn workspace
  package\*\*\*

\*\*\* This part, the fact that it is a module name confused me a lot because
many tutorials purport to show you how to integrate create-react-app with wasm
but they have their wasm code published on NPM which is the only reason their
tutorials work if you don't do careful yarn link commands and such. This was
really confusing to me so I developed this project that uses yarn workspaces

See [ex1](https://www.npmjs.com/package/@prichey/hello-wasm) from
[here1](https://prestonrichey.com/blog/react-rust-wasm/) and
[ex2](https://www.npmjs.com/package/wasm-koala-blog) from
[here2](https://koala42.com/using-webassembly-in-your-reactjs-app/)

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
