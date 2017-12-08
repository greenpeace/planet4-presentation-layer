# Planet 4 Presentation Layer

## Workflow

#### tl:dr:

*`feature branch` -> Pull Request -> merge to `master` -> merge `master` into `gh-pages`*

#### Full workflow

1. Start a new branch on local with a title that represents your work. i.e. `article-list-block`
2. Push granular and atomic commits to your branch as you continue work and push your changes up to GitHub in blocks of work.
3. After your work is complete & tested, open a Pull Request with a useful title & description
4. Request a review from another developer on the presentation-repo.
5. The developer will review your work and request changes or approved.
6. Once approved the reviewer will merge your Pull Request into `master`.
6. The reviewer will then merge `master` into the `gh-pages` branch for design review. 

#### More reading on Gitflow:
 - [Canonical Gitflow Explanation](https://datasift.github.io/gitflow/IntroducingGitFlow.html)
 - [Atlassian Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
 - [GitHub Gitflow Introduction](https://guides.github.com/introduction/flow/) 

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

This project uses a locally-installed `gulp` with [npm scripts](https://docs.npmjs.com/misc/scripts) to simplify setup, but at times it may be useful to have direct command-line access to `gulp` itself. You can install the `gulp` CLI using [these "getting started" instructions](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md).

This table shows the corresponding `gulp` commands for each `npm` command:

Task | `npm` command | `gulp` command
---- | ------------- | -------------------------
Compile SCSS to CSS | `npm run gulp:styles` | `gulp styles`
Start Gulp watch task to auto-rebuild SCSS | `npm run gulp` | `gulp`

## Coding Guidelines

Coding guidelines are very important here in this project and delivery depends on that.

* [CSS Coding practices](https://make.wordpress.org/core/handbook/best-practices/coding-standards/css/)
* [JS Coding practices](https://make.wordpress.org/core/handbook/best-practices/coding-standards/javascript/)
* CSS Naming variables ([1](https://blog.toughbyte.com/blabla-9fd86eae4e6c)) ([2](https://medium.com/@drublic/css-naming-conventions-less-rules-more-fun-12af220e949b))
* [Naming convention](http://thesassway.com/advanced/modular-css-naming-conventions)
