# curry
Curry any function.

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

### Ariaty

You can set a fixed size for the function arguments usign empty placeholders.
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
