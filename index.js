const _ = undefined;

const curry = (func, ...placeholders) => {

    const actualLength = (args) => {
        return placeholders.length > 0 ? placeholders.filter(v => v).length + args.length : args.length;
    }

    const maxLength = placeholders.length > 0 ? placeholders.length : func.length;

    // melt the placeholder values with the arguments passed by the user in the curried functions.
    const meltArgsWithPlaceholders = (args) => {
        if (placeholders.length === 0) {
            return args;
        }
        let index = 0;
        return placeholders.map(v => {
            return v ? v : args[index++];
        });
    }

    const curr = (...args) => {
        // if the user try to pass more arguments then the function accept, it will throw an error.
        if (actualLength(args) > maxLength) {
            console.log(actualLength(args), maxLength);
            throw new Error('Illegal arguments amount.');
        }
        if (actualLength(args) === maxLength) {
            return func(...meltArgsWithPlaceholders(args));
        }
        // flat the values passed in arguments and concat with previous ones.        
        return (...newArgs) => curr(...args.concat(Array.prototype.concat.apply([], newArgs))); 
    };
    return curr;
};
module.exports = {
    _,
    curry,
}