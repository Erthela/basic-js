const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (!Array.isArray(members)) return false;
    let str = [];
    members.forEach(key => {
        if (typeof key === 'string') {
            let newKey = key.trim();
            str.push(newKey[0].toUpperCase());
        }
    });
    return str.sort().join('');
};
