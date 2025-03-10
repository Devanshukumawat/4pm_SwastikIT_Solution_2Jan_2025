//iife(Immediately Invoked Function Expression)

// function add(a, b) {
//   return a + b;
// }

// let a = 7383;
// console.log(a);

// let b = 678;
// console.log(b);

// const values = add(7, 8);
// console.log(values);

// iife syntax = ()()

// (function (a, b) {
//   console.log(a * b);
// })(6, 7);

// (() => {
//   console.log("hello class");
// })();

// json - javascript object notation

const product = {
  Pname: "Tv",
  Prating: "7",
  PPrice: "$67",
};

const strObj = JSON.stringify(product);
console.log(strObj);

// // console.log(product.PPrice);

// console.log(product["Pname"]);
