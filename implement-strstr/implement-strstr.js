/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let pattern = new RegExp(needle);
    return haystack.search(pattern);
};