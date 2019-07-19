export const getAverage = (array) => {
    if (Array.isArray(array)) {
        const sum = array.reduce((accum, val) => accum + parseInt(val, 10) || 0, 0);
        const numAmount = array.length;
        return sum / numAmount;
    }
    return null;
};