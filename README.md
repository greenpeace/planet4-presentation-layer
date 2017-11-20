# Planet 4 Presentation Layer

## Local Installation

Execute these two `npm` commands to install project dependencies

```
npm install
```

To compile the SCSS source to CSS, use

```
npm run gulp:styles
```

To watch SCSS files and rebuild the CSS whenever a `.scss` source file changes, use

```
npm run gulp
```

### Auto-reloading development server

To start a local development server that will auto-rebuild SCSS and reload your page whenever the HTML or styles change, run

```
npm start
```

### Using Gulp directly

This project uses a locally-installed `gulp` with [`npm` scripts](https://docs.npmjs.com/misc/scripts) to simplify setup, but at times it may be useful to have direct command-line access to `gulp` itself. You can install the `gulp` CLI using [these "getting started" instructions]((https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

This table shows the corresponding `gulp` commands for each `npm` command:

Task | `npm` command | `gulp` command
---- | ------------- | -------------------------
Compile SCSS to CSS | `npm run gulp:styles` | `gulp styles`
Start Gulp watch task to auto-rebuild SCSS | `npm run gulp` | `gulp`

## Coding Guidelines

Coding guidelines are very important here in this project and delivery depends on that.

* (CSS Coding practices)[https://make.wordpress.org/core/handbook/best-practices/coding-standards/css/]
* (JS Coding practices)[https://make.wordpress.org/core/handbook/best-practices/coding-standards/javascript/]
* CSS Naming variables (1)[https://blog.toughbyte.com/blabla-9fd86eae4e6c] (2)[https://medium.com/@drublic/css-naming-conventions-less-rules-more-fun-12af220e949b]
* Naming convention (1)[http://thesassway.com/advanced/modular-css-naming-conventions]
