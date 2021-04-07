// const person: {
// name: string;
// age: number;
// } = {
// name: "Chris",
// age: 30,
// };

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Chris",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Chris",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.READ_ONLY,
};

// person.role.push(1);
// person.role[1] = 10;
// person.role = [0, "admin"];

person.role = 10;
console.log(person.role);

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
