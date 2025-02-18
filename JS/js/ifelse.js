const prompt = require("prompt-sync")();
// if (condition) {
//   statement;
// } else if (condition) {
//   statement;
// } else {
//   statement;
// }

// let age = " ";

// if (age >= 18) {
//   console.log("You can apply for license" + age);
// } else if (age < 18) {
//   console.log("You can not apply for license " + age);
// } else {
//   console.log("Invalid Input");
// }

// console.log(" " == 0);

// let age = prompt("Enter your age :- ");

// console.log(typeof age + " Value :- " + age);

// if (age >= 18) {
//   console.log("You can apply for license");
// } else if (age < 18) {
//   console.log("You can not apply for license ");
// } else {
//   console.log("Invalid Input");
// }

// npm
// External package :- prompt-sync
// 1. npm init -y :-  package.json
// 2. npm install/i prompt-sync (Install)
// 3. require("prompt-sync")()

/*

userInput(1) = 12
userInput(2) = 12
userInput(3) =  +,/,*,-

*/

// console.log("5" + "7");

// let number = parseInt(prompt("Number :- "));
// console.log(number + " Type :- " + typeof number);

// console.log("7" + "7"); // 77
// console.log(7 + 7); // 14

// let num1 = parseInt(prompt("Enter 1st Number :- ")); // "5"
// let num2 = parseInt(prompt("Enter 2nd Number :- ")); // "7"
// let operator = prompt("Enter Operator (+,/,*,-) :- "); // +

// let result;

// if (operator == "+") {
//   result = num1 + num2;
// } else if (operator == "-") {
//   result = num1 - num2;
// } else if (operator == "*") {
//   result = num1 * num2;
// } else if (operator == "/") {
//   result = num1 / num2;
// }
// console.log(num1 + operator + num2 + " = " + result);

/*
--- loan --- 
job_type = private/ business / government
government 
salary = 50k > you can apply for loan ✅
salary = 50k < you can not apply for loan ❌

business
turnover = 10 lakh > you can apply for loan ✅
turnover = 10 lakh < you can not apply for loan ❌

private 
No loan for you 🫤
*/

let job_type = prompt("private / business / government :- ");

if (job_type == "government") {
  let salary = prompt("Enter Your Monthly Salary :- ");
  if (salary >= 500000) {
    console.log("you can apply for loan ✅");
  } else if (salary < 500000) {
    console.log("you can not apply for loan ❌");
  } else {
    console.log("Invalid Input");
  }
} else if (job_type == "business") {
  let turnover = prompt("Enter Your Yearly Turnover :- ");
  if (turnover >= 1000000) {
    console.log("you can apply for loan ✅");
  } else if (turnover < 1000000) {
    console.log("you can not apply for loan ❌");
  } else {
    console.log("Invalid Input");
  }
} else if (job_type == "private") {
  console.log("No loan for you 🫤");
} else {
  console.log("Invalid Input");
}
