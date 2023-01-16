const arr = [1, 3, 8, 9, 50, 5];

const addMiddle = function (arr) {
  arr.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    sum = sum + arr[i];
  }
  return sum;
};

console.log(addMiddle(arr));
