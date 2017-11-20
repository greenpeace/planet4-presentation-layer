# Planet 4 Presentation Layer

## Local Installation

Execute these two `npm` commands to install project dependencies

```
npm install
npm run bower
```

To compile the SCSS source to CSS, use

```
npm run gulp:styles
```

To watch SCSS files and rebuild the CSS whenever a `.scss` source file changes, use

```sh
npm run gulp
```

This will automatically re-compile your CSS whenever a `.scss` source file changes, but you will still have to manually reload the browser tab to see the change. Auto reload is not present so far.

### Using Bower & Gulp globally

This project uses locally-installed build tools & `npm` scripts to simplify setup, but at times it may be beneficial to have full access to build tools like `gulp` or `bower`. If you wish to use these command-line utilities directly, you can install them globally:

- To install the `bower` command line utility, run `npm install -g bower`.
- To install the `gulp` command line utility, [follow these Gulp "getting started" instructions]((https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)

### Command Reference

This table shows the corresponding `bower` and `gulp` commands for each `npm` command.

Task | `npm` command | corresponding CLI command
---- | ------------- | -------------------------
Install NPM dependencies | `npm install` | _n/a_
Install Bower dependencies | `npm run bower` | `bower install`
Compile SCSS to CSS | `npm run gulp:styles` | `gulp styles`
Start Gulp watch task to auto-rebuild SCSS | `npm run gulp` | `gulp`

## Coding Guidelines

Coding guidelines are very important here in this project and delivery depends on that.

* (CSS Coding practices)[https://make.wordpress.org/core/handbook/best-practices/coding-standards/css/]
* (JS Coding practices)[https://make.wordpress.org/core/handbook/best-practices/coding-standards/javascript/]
* CSS Naming variables (1)[https://blog.toughbyte.com/blabla-9fd86eae4e6c] (2)[https://medium.com/@drublic/css-naming-conventions-less-rules-more-fun-12af220e949b]
* Naming convention (1)[http://thesassway.com/advanced/modular-css-naming-conventions]