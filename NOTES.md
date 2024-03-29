# Notes

## v2.0.0

In v2.0.0 I updated from webpack 4/create-react-app 4 to webpack 5/create-react-app 5

This comment was very helpful to get this started https://github.com/Emurgo/cardano-serialization-lib/issues/295#issuecomment-995943141 it leverages webpack 5's native wasm loading, which is behind some experimental flags instead of the wasm-load method used in the webpack 4 version

## v1.0.0

The v1.0.0 is the initial version of this app. The main accomplishment is
getting a rust/wasm package working in a monorepo with a create-react-app
instance

The fractal drawing demonstrated in this app isn't really any faster with wasm
(limited by the HTML5 canvas drawing speed currently), but the basic ability to
use rust in a monorepo with create-react-app should be a good starter template
for other apps

The tutorial at https://rustwasm.github.io/wasm-bindgen/ is a great starting
point and I highly recommend going through the tutorial, but it was still a
journey following this to integrate it with create-react-app

## Important realizations to integrate create-react-app+wasm

- We need to import the module using dynamic import e.g. await
  import('name_of_module'), not standard static top level import

- We import the name of our wasm module e.g. `await import('name_of_module')`,
  we don't import a specific filename!

- The module name that you import can be module published on NPM or a yarn
  workspace package inside your monorepo\*\*\*

\*\*\*This part confused me a lot because many tutorials purport to show you
how to integrate create-react-app with wasm but they have their wasm code
published on NPM which is the only reason their tutorials work basically. Their
tutorials don't really tell you to use a monorepo package and if you're not
careful, you may miss their instructions to use `npm link`, so it is only
working in their tutorials because it is downloading their wasm package from
npm.

See the npm package
[@prichery/hello-wasm](https://www.npmjs.com/package/@prichey/hello-wasm) from
[from this tutorial](https://prestonrichey.com/blog/react-rust-wasm/) and the
npm package [wasm-koala-blog](https://www.npmjs.com/package/wasm-koala-blog)
from [from this
tutorial](https://koala42.com/using-webassembly-in-your-reactjs-app/)

In my repo here, it doesn't use a package published on npm, it uses a module
inside the monorepo (which could be published to npm, but that's not required
to make it work)

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
