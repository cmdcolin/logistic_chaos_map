# logistic_chaos_map

Renders the [logistic map](https://en.wikipedia.org/wiki/Logistic_map) using a
canvas and some basic JS. It also implements the same logistic map drawing code
in WASM and js

I think this repo is fairly unique for making a fairly minimal integration of
wasm and create-react-app

## Screenshot

![](img/1.png)

See https://cmdcolin.github.io/logistic_chaos_map/

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

To deploy to github pages

```
cd workspace-b
yarn deploy
```

## Notes

See [NOTES.md](NOTES.md)
