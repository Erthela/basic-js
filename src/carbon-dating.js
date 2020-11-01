const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here

    let num = Number(sampleActivity);
    if (num !== 'Number') return false;
    return Math.ceil((Math.log(15 / num)) / (0.693 / 5730));
};
