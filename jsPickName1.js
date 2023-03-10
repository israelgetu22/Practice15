console.log("Practice interview Questions");

const users = [
  { id: 1, name: "Jack", isActive: true, age: 20 },
  { id: 2, name: "John", isActive: true, age: 18 },
  { id: 3, name: "Mike", isActive: false, age: 30 },
];

const names = users
  .sort((user1, user2) => (user1.age < user2.age ? 1 : -1))
  .filter((user) => user.isActive)
  .map((user) => user.name);

console.log(names);

// users.sort((user1, user2) => (user1.age < user2.age ? -1 : 1));

// const names = [];
// for (let i = 0; i < users.length; i++) {
//   if (users[i].isActive) {
//     names.push(users[i].name);
//   }
// }
// console.log(names);

/*const names = [];
for (let i = 0; i < users.length; i++) {
  names.push(users[i].name);
}

console.log("names", names);


const names = [];
users.forEach((user) => {
  names.push(user.name);
});

console.log(names);

const names = users.map((user) => user.name);
console.log(names);



const names = users.filter((user) => user.isActive).map((user) => user.name);
console.log(names);

*/

//console.log(names.reverse());

console.log("multi");
