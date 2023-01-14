const range = (start, end) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    if (i === 10 || i === 20 || i) {
      result.push(i);
    }
  }
  return result;
};

const check = range(5, 30);
console.log(check);
