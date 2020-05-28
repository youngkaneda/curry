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
console.log(curriedAdd(1)(3, 2)); // one way
console.log(curriedAdd(1, 2)(3)); // other way
console.log(curriedAdd(1)(2)(3)); // anoother way
// if you pass more args than the function accepts will thrown an error
console.log(curriedAdd(1)(2, 3, 4)); // => throw error
```

### Placeholders
You can pass default arguments and their position to the curried function.
```
const {curry, _} from 'curry-fn';

const add = (x, y, z) => x + y + z;
const curriedAdd = curry(add, _, _, 4);
console.log(curriedAdd(3, 2)); // one way
console.log(curriedAdd(1)(2)); // other way
```

### Arity

You can set a fixed size for the function arguments.
```
const {curry, _} from 'curry-fn';

const add = (...values) => values.reduce((prev, curr) => prev + curr);
const curriedAdd = curry(add, _, _);
console.log(curriedAdd(3, 2)); // one way
console.log(curriedAdd(1)(2)); // other way
console.log(curriedAdd(1)(2, 3)); // => throw error
```

## Motivation

I just want to write some useful functional code in javascript.

## TODO

1. ~~add tests.~~
2. add code coverage.

---

Feel free to fork and contribute.
