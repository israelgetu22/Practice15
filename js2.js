const shuffleItems = (items) => {
  return items
    .map((item) => ({ sort: Math.random(), values: item }))
    .sort((num1, num2) => num1.sort - num2.sort)
    .map((a) => a.values);
};

console.log(shuffleItems[(1, 2)]);
