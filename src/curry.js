
const curry = (func) => {

    const actualLength = (args) => {
        return args.length;
    }

    const maxLength = func.length;

    const curr = (...args) => {

        if (actualLength(args) === maxLength) {
            return func(...args);
        }
        // flat the values passed in arguments and concat with previous ones.        
        return (newArg) => curr(...args.concat(newArg)); 
    };

    return curr();
};

module.exports = {
    curry,
}