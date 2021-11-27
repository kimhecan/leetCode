/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    return image.map((v) => v.reverse().map((j) => j === 0 ? 1 : 0));
};