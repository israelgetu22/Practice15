const arr = [10, 2, 3, 4, 2, 2, 2, 2];
const minValue = Math.min(...arr);
const numFrq = arr.filter((el) => el === minValue);

console.log(numFrq.length);
