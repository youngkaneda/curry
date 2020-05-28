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
    <a aria-label="gitHub release" href="https://travis-ci.com/youngkaneda/curry%22%3E">
        <img alt="" src="https://img.shields.io/travis/com/youngkaneda/curry?logo=Travis%22%3E"/>
    </a>
    <a aria-label="npm package" href="https://www.npmjs.com/package/name-here%22%3E">
        <img alt="" src="https://img.shields.io/npm/v/name-here.svg%22%3E"/>
    </a>
    <a href="https://bundlephobia.com/result?p=name-here@latest%22%3E">
        <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/name-here.css.svg%22%3E"/>
    </a>
    <a href="https://github.com/youngkaneda/curry/issues%22%3E">
        <img src="https://img.shields.io/github/issues/youngkaneda/curry.svg%22%3E">
    </a>
    <a aria-label="contributors graph" href="https://github.com/youngkaneda/name-here/graphs/contributors%22%3E">
      <img src="https://img.shields.io/github/contributors/youngkaneda/curry.svg%22%3E"/>
    </a>
    <a aria-label="license" href="https://github.com/youngkaneda/curry/blob/master/LICENSE%22%3E">
        <img src="https://img.shields.io/github/license/youngkaneda/curry" alt=""/>
    </a>
  </p>
</div>

## Instalation

```
npm install "name here"
```

## How to use

### Normal use
```
const {curry} from "name here";

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
const {curry, _} from "name here";

const add = (x, y, z) => x + y + z;
const curriedAdd = curry(add, _, _, 4);
console.log(curriedAdd(3, 2)); // one way
console.log(curriedAdd(1)(2)); // other way
```

### Arity

You can set a fixed size for the function arguments.
```
const {curry, _} from "name here";

const add = (...values) => values.reduce((prev, curr) => prev + curr);
const curriedAdd = curry(add, _, _);
console.log(curriedAdd(3, 2)); // one way
console.log(curriedAdd(1)(2)); // other way
console.log(curriedAdd(1)(2, 3)); // => throw error
```

## Motivation

I just want to write some useful functional code in javascript.

---

Feel free to fork and contribute.
<div align="center">
  <p>
    <sub>Built with ❤︎ by
      <a href="https://github.com/youngkaneda%22%3Eyoungkaneda"></a>
    </sub>
  </p> 
</div>