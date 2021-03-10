// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!Array.isArray(matrix) || matrix.length === 0) {
        return [];
    }
    return matrix.filter((a, b) => (b % 2 === 0 ? a : a.reverse())).flat();
};
