// const obj1 = {
//   userName: "Devanshu",
//   password: "45678",
//   Email: "dev@gmail.com",
// };

// let obj2 = obj1;

// obj1.userName = "Aman";

// console.log(obj1);
// console.log(obj2);

// shallow copy

// const obj1 = {
//   userName: "Devanshu",
//   password: "45678",
//   Email: "dev@gmail.com",
// };

// let obj2 = { ...obj1 }; // spread - unpack
// rest ...obj1 - pack

// // obj1.userName = "Manny";
// obj2.userName = "Daisy";

// console.log(obj1);
// console.log(obj2);

// const obj1 = {
//   userName: "Devanshu",
//   password: "45678",
//   Email: "dev@gmail.com",
//   address: {
//     city: "jaipur",
//     pinCode: "4567",
//   },
// };

// let obj2 = { ...obj1 };

// obj1.userName = "Manny";
// obj1.address.city = "Ajmer";

// console.log(obj1);
// console.log(obj2);

// deep copy

const obj1 = {
  userName: "Devanshu",
  password: "45678",
  Email: "dev@gmail.com",
  address: {
    city: "jaipur",
    pinCode: "4567",
  },
  all: function () {
    console.log("hello");
  },
};

// let obj2 = Object.assign({}, obj1);

// const obj2 = JSON.parse(JSON.stringify(obj1));

// obj1.address.city = "Ajmer";
// obj2.address.city = "Kota";

console.log(obj1);
console.log(obj2);
