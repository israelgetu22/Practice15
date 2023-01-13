// const multiply = (num1) => {
//   return (num2) => {
//     return num1 * num2;
//   };
// };

// console.log(multiply(2)(3));

// const multiply = (num1) => (num2) => num1 * num2;
// console.log(multiply(2)(3));

// const append = (arr, el) => {
//   arr.push(el);
//   return arr;
// };

// console.log(append([1, 2, 3], 4));

//const mergeArray = (arr1, arr2) => {
//return arr1.concat(...arr2);

//   return [...arr1, ...arr2];
// };

// const arr1 = [4, 5];
// const arr2 = [2, 3];

// const result = mergeArray(arr1, arr2);
// console.log(result);

const users = [
  { id: 1, name: "Jack", isActive: true },
  { id: 2, name: "John", isActive: true },
  { id: 3, name: "Mike", isActive: false },
];

const isNameExists = (name, arr) => arr.some((el) => el.name === name);

// const isNameExists = (name, users) => {
//   let exists = false;
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].name === name) {
//       exists = true;
//     }
//   }
//   return exists;
// };

// console.log(isNameExists("Jack", users));
// console.log(isNameExists("Hoo", users));
