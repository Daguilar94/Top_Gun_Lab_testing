export const getAverage = (array) => {
    if (Array.isArray(array)) {
        const sum = array.reduce((accum, val) => accum + parseInt(val, 10) || 0, 0);
        const numAmount = array.length;
        return sum / numAmount;
    }
    return null;
};

export const isInRange = (low, high, number) => {
    if (Number(number) || Number(number) === 0) {
        return number >= low && number <= high;
    }
    return false;
}

export const getResult = (grades) => {
    return grades.reduce((accum, {value, weight}) => accum + value * weight / 100, 0)
}