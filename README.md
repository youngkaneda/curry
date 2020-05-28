<div align="center">
  <a href="https://github.com/youngkaneda/curry%22%3E
    <img src="static/logo.png" alt="Curry logo" height="160"></a>
  <br>
  <br>
  <p>
    <b>Curry any function.</b>
  </p>
  <p>
    <i>An useful function to make a multi params function be called in chains.</i>
  </p>
  <p>
    <a aria-label="gitHub release" href="https://travis-ci.org/youngkaneda/curry">
        <img alt="" src="https://img.shields.io/travis/youngkaneda/curry"/>
    </a>
    <a aria-label="npm package" href="https://www.npmjs.com/package/curry-fn">
        <img alt="" src="https://img.shields.io/npm/v/curry-fn"/>
    </a>
    <a href="https://github.com/youngkaneda/curry/issues">
        <img src="https://img.shields.io/github/issues/youngkaneda/curry">
    </a>
    <a aria-label="license" href="https://github.com/youngkaneda/curry">
        <img src="https://img.shields.io/badge/License-ISC-blue.svg" alt=""/>
    </a>
  </p>
  <p>
    <sub>Built with ❤︎ by
      <a href="https://github.com/youngkaneda">Kaneda</a>
    </sub>
  </p>
</div>

## Instalation

```
npm install curry-fn
```

## How to use

### Normal use
```
const {curry} from 'curry-fn';

const add = (x, y, z) => x + y + z;
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3));
// if you pass more than one arg than the function will ignore them
console.log(curriedAdd(1)(2, 3)(3)); // => 6
```

## Changelog

## 1.0.0

First release.

## 1.1.0

Tests added.

## 1.2.0

*For the sake of fudamentalism, I removed somes features, given the  fact that unary functions are a requirement in curry, and the potential leading to errors, and misunderstanding about arbitrary parameters sizes in function composition.*

Removed features:

1. Placeholders.
2. Arbitrary arity.
3. 1..N parameters per curried function.

## Motivation

I just want to write some useful functional code in javascript.

## TODO

1. ~~add tests.~~
2. add code coverage.

---

Feel free to fork and contribute.
