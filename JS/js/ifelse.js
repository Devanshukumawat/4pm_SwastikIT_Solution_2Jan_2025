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

// let job_type = prompt("private / business / government :- ");

// if (job_type == "government") {
//   let salary = prompt("Enter Your Monthly Salary :- ");
//   if (salary >= 500000) {
//     console.log("you can apply for loan ✅");
//   } else if (salary < 500000) {
//     console.log("you can not apply for loan ❌");
//   } else {
//     console.log("Invalid Input");
//   }
// } else if (job_type == "business") {
//   let turnover = prompt("Enter Your Yearly Turnover :- ");
//   if (turnover >= 1000000) {
//     console.log("you can apply for loan ✅");
//   } else if (turnover < 1000000) {
//     console.log("you can not apply for loan ❌");
//   } else {
//     console.log("Invalid Input");
//   }
// } else if (job_type == "private") {
//   console.log("No loan for you 🫤");
// } else {
//   console.log("Invalid Input");
// }

// let height = prompt("Enter Animal Height (Short/Tall):- ");

// if (height == "short") {
//   let squeak = prompt("Can not squeak / Can squeak (yes/no) :- ");
//   if (squeak == "yes") {
//     console.log("Might be a rat");
//   } else if (squeak == "no") {
//     console.log("Might be a squirrel ");
//   } else {
//     console.log("Invalid Input");
//   }
// } else if (height == "tall") {
//   let neck = prompt("Short neck / Long neck :-  ");
//   if (neck == "short") {
//     let nose = prompt("Short nose / Long nose :- ");
//     if (nose == "short") {
//       let stay = prompt("On land / In water (land/water) :- ");
//       if (stay == "water") {
//         console.log("Might be a hippo");
//       } else if (stay == "land") {
//         console.log("Might be a rhinoceros");
//       } else {
//         console.log("Invalid Input");
//       }
//     } else if (nose == "long") {
//       console.log("Might be a elephant");
//     } else {
//       console.log("Invalid Input");
//     }
//   } else if (neck == "long") {
//     console.log("Might be a giraffe");
//   } else {
//     console.log("Invalid Input");
//   }
// } else {
//   console.log("Invalid Input");
// }

/*
player 1 = (1-10 guess) = 4-Hide
player 2 = 4 Yaahooo You won ! 🎉
           3 better luck next time 🫤
           
*/

// const player_1 = prompt.hide("Guess a number (Player-1)(1-10) :- ");
// const player_2 = prompt("Guess a number (Player-2)(1-10) :-");

// if (player_1 == player_2) {
//   console.log("Yaahooo You won ! 🎉");
// } else if (player_1 !== player_2) {
//   console.log("better luck next time 🫤");
// } else {
//   console.log("Invalid Input");
// }

// console.log(
//   "Player-1 Guessed number :- " +
//     player_1 +
//     " Player-2 Guessed number :- " +
//     player_2
// );

//5 player-1

//player-2
//8 -  2
//3  - 1
//5 - won
// 6 - better luck next time

// let a = 10;
// let firstName = "Devanshu";

// console.log("Hello" + "      " + a + firstName);

// console.log(`Hello   ${a}      ${firstName}`);

// test;

let player_1, player_2;
let chances = 3;

player_1 = prompt("Guess a number (Player-1)(1-10) :- ");
player_2 = prompt.hide("Guess a number (Player-2)(1-10) :- ");

if (player_1 == player_2) {
  console.log("Yaahooo You won! 🎉");
} else {
  chances--;

  if (chances > 0) {
    console.log(
      "Better luck next time 🫤. You have " + chances + " chance(s) left."
    );

    // Provide hint
    if (player_1 > player_2) {
      console.log("Hint: Player-1's guess is higher than Player-2's guess.");
    } else if (player_1 < player_2) {
      console.log("Hint: Player-1's guess is lower than Player-2's guess.");
    }

    player_1 = prompt("Guess a number (Player-1)(1-10) :- ");
    player_2 = prompt.hide("Guess a number (Player-2)(1-10) :- ");

    if (player_1 == player_2) {
      console.log("Yaahooo You won! 🎉");
    } else {
      chances--;

      if (chances > 0) {
        console.log(
          "Better luck next time 🫤. You have " + chances + " chance(s) left."
        );

        // Provide hint
        if (player_1 > player_2) {
          console.log(
            "Hint: Player-1's guess is higher than Player-2's guess."
          );
        } else if (player_1 < player_2) {
          console.log("Hint: Player-1's guess is lower than Player-2's guess.");
        }

        player_1 = prompt("Guess a number (Player-1)(1-10) :- ");
        player_2 = prompt.hide("Guess a number (Player-2)(1-10) :- ");

        if (player_1 == player_2) {
          console.log("Yaahooo You won! 🎉");
        } else {
          console.log("Sorry, you ran out of chances! 🫤");
        }
      } else {
        console.log("Sorry, you ran out of chances! 🫤");
      }
    }
  } else {
    console.log("Sorry, you ran out of chances! 🫤");
  }
}
