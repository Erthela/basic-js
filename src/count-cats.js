const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    let counter = 0;
    matrix.forEach(key => key.forEach(key => {if (key == "^^") counter++}));
    return counter;
};
