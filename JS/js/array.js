const prompt = require("prompt-sync")();

//Array

// let myArray = ["String", "Aman", "Manny", 67, 98, "Kizie", true];
// //index          0         1        2      3   4    5       6
// let myNewArray = new Array("Manny", 67, 98, "Kizie", false);

// console.log(myArray);
// console.log(myNewArray);
// console.log(myArray[2]);

//Array methods

// let myArray = ["String", "Aman", "Manny", 67, 98, "Kizie", true];
// let myArrayLength = myArray.length;
// console.log(myArrayLength);

/*
pop() last index - value remove
push() last index - value add
shift() start index - value remove
unshift() start index - value add
 */
// let myArray = ["String", "Aman", "Manny", 67, 98, "Kizie", true];
// mutable

// myArray.pop();
// myArray.push("Devanshu");

// myArray.shift();
// myArray.unshift("Daisy");

// console.log(myArray);

// let myArray = ["String", "Aman", "Manny", 67, 98, "Kizie", true];

// let removeValue = myArray.pop();

// console.log(myArray);
// console.log(`Remove Value :- ${removeValue}`);

// let myArray = ["String", "Aman", "Manny", 67, 98, "Kizie", true];

// myArray.push("Hello class");

// console.log(myArray);

// let myArray = ["String", "Aman", "Manny", 67, 98, "Kizie", true];

// let removeValue = myArray.shift();

// console.log(myArray);

// console.log(`Remove Value :- ${removeValue}`);

// let myArray = ["String", "Aman", "Manny", 67, 98, "Kizie", true];

// myArray.unshift("Devanshu");

// console.log(myArray);

// const myArray = ["Manny", "Kizie", "Hello", 76, 45, false];

// let JoinArray = myArray.join("*");

// console.log(myArray);
// console.log(JoinArray + " " + typeof JoinArray);

// const myArray = ["Manny", "Kizie", "Hello", 76, 45, false];

// myArray[2] = "Devanshu";

// console.log(myArray);

// const myArray1 = ["Manny", "Kizie", "Hello", 76, 45, false];
// const myArray2 = ["Aman", "Swastik", 87, true];

// let ArrayConcat = myArray1.concat(myArray2);

// console.log(ArrayConcat);

// const myArray1 = ["Manny", "Kizie", "Hello", 76, 45, false];

// myArray1.splice(1, 3, "Devanshu", "Swastik");

// console.log(myArray1);

// const myArray1 = ["Manny", "Kizie", "Hello", 76, 45, false];

// let removeValue = myArray1.slice(1, 4);

// console.log(removeValue);

// const myArray1 = ["Manny", "Kizie", "Hello", 76, 45, false];

// const myArray = ["Manny", "Aman", 6, 7, 4];

// myArray.sort();

// console.log(myArray);

// const myArray1 = ["Manny", "Kizie", "Hello", 76, 45, false];

// delete myArray1[2];

// console.log(myArray1);

// const myArray = ["Manny", "Kizie", 67, 56, true];

//for forEach map

// for
// for(start ; condition ; increment/decrement){
//     statement
// }

// for (let x = 1; x <= 5; x++) {
//   console.log(x);
// }

// const myArray = ["Manny", "Kizie", 67, 56, true];

// for (let x = 1; x <= 10; x++) {
//   console.log(x);
// }

// const myArray = ["Manny", "Kizie", 67, 56, true, "Aman"];
// //index           0          1      2   3    4     5

// console.log(myArray[1]);

// for (let x = 0; x < myArray.length; x++) {
//   let values = myArray[x];
//   console.log(values);
// }

// () => {};

// const myNewArray = ["Dev", "Text", 6, 8, false];

// myNewArray.forEach((value, index) => {
//   console.log(value + " index :-  " + index);
// });

// function add(value, index) {
//   console.log(value);
// }

// myNewArray.forEach(add);

// const myNewArray = ["Dev", "Text", 6, 8, false];

// const returnValue = myNewArray.forEach((value, index) => {
//   return value;
// });

//const returnValue;

// console.log(returnValue);

// const returnValue = myNewArray.map((value, index) => {
//   return value;
// });

// console.log(returnValue);

// const myArray = [5, 77, 6, 2, 3, 44, 54, 32, 12];

// const filterValue = myArray.filter((value, index) => {
//   return value < 50;
// });

// console.log(filterValue);

// const myArray = [1, 2, 3, 4, 5];

// const TotalValue = myArray.reduce((acc, value, index) => {
//   return acc + value;
// });

/*

acc = 5 value = 1    6
acc = 6 value = 2    8
acc = 8 value = 3    11
acc = 11 value 4     15
acc = 15 value = 5   20
acc = 20 value = ?

acc = 1 value = 2    3
acc = 3 value = 3    6
acc = 6 value = 4    10
acc = 10 value = 5   15
acc = 15 value

*/

// console.log(TotalValue);

// const myNewArray = [2, 3, 4, 6, 2, 3];
// const TotalValue = myNewArray.reduce((acc, value, index) => {
//   return acc * value;
// }, 3);

// console.log(TotalValue);

// tables
// userInput = 2;

//144
//2592

// let num = prompt("Enter Number :- ");

// for (let x = 1; x <= 10; x++) {
//   let table = num * x;
//   console.log(table);
// }
