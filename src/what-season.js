const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (date === undefined) return 'Unable to determine the time of year!';
    if (date.hasOwnProperty('toString')) throw new Error();
    if (date.getMonth() < 2) {
        return "winter"
    } else if (date.getMonth() < 5) {
        return "spring"
    } else if (date.getMonth() < 8) {
        return "summer"
    } else if (date.getMonth() < 11) {
        return "autumn"
    } else return "winter"
};
