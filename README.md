# Mithril / Typescript Example Project

This is a very barebones example project using [Mithril 2.0](https://mithril.js.org/) and TypeScript.

This project uses [browserify](https://github.com/browserify/browserify) and [tsify](https://github.com/TypeStrong/tsify) to compile the app source files and 3rd party npm modules into a single app bundle. It uses [budo](https://github.com/mattdesl/budo) to serve and live-reload the `public` directory on a local server.

## Installation:

    yarn install

### Recommended VSCode Extensions

- tslint

## Serve this project locally and recompile .ts sources on save:

    yarn start

Then go to http://localhost:3000 in your browser. This will serve the files in the `public` directory, defaulting to the `index.html` file.

The file `public/js/app.js` is rebuilt and auto-reloaded whenever the ts sources are edited.

## Build a minified bundle

    yarn run build

Will output a minified `app.js` file in `public/js`

---

For a more complete project setup with PostCSS compilation and hot reloading, take a look at [this repo](https://github.com/spacejack/mithril-browserify-ts-budo).
