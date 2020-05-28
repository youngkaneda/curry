const { curry, _ } = require(__dirname + '/../src/curry.js');

const add = (x, y, z) => x + y + z;
const curriedAdd = curry(add);

test('Add 3, 2, and 1',() => {
    expect(curriedAdd(3, 2)(1)).toBe(6);
    expect(curriedAdd(3)(1)(2)).toBe(6);
    expect(curriedAdd(3)(1, 2)).toBe(6);
});

test('Pass more than supported arguments.',() => {
    expect(() => curriedAdd(3, 2)(1, 4)).toThrow('Illegal arguments amount.');
});

test('Pass arguments after the functions has ended his task', () => {
    expect(() => curriedAdd(3, 2)(4)(3)).toThrow(TypeError);
});

test('Pass not all arguments to return a function.', () => {
    expect(typeof curriedAdd(3, 2)).toBe('function');
});