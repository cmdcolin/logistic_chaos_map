# logistic_chaos_map

Renders the [logistic map](https://en.wikipedia.org/wiki/Logistic_map) using a
canvas and some basic JS. It also implements the same logistic map drawing code
in WASM and js

I think this repo is fairly unique for making a fairly minimal integration of
wasm and create-react-app. It uses yarn workspaces with the wasm code in one
workspace and the create-react-app in another workspace. See [notes](NOTES.md)
for more details

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

Start a webpack-dev-server for the create-react-app

```
## this is the create-react-app instance
cd app
yarn start
```

To deploy to github pages

```
cd app
yarn deploy
```

## Notes

See [NOTES.md](NOTES.md)
