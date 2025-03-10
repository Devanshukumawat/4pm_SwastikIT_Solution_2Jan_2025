//Promise

//Pending
//Fulfill
//Reject

// Create Promise - Pending
// Fulfill  //Reject

// Async

// const a = 78;
// console.log(a);

// //Async Task
// setTimeout(() => {
//   console.log("Hello I am Timeout Fun");
// }, 2000);

// const b = "Name";
// console.log(b);

// sync
// let x = 18;
// console.log(x);

// let b;
// console.log(b);
// console.log(7);
// console.log("Dev");
// console.log(dfghj);

// let y = "Devanshu";
// console.log(y);

// fetch("http://www.example.json").then(res).catch(error).finally(always);

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async Task Complete ..🙂");
//     // resolve({ userName: "Bike Mil Gai" });
//     reject({ message: "Bike Nhi Mili" });
//   }, 2000);
// });

// myPromise.then((res) => {
//   console.log(res);
// });

// myPromise.catch((err) => {
//   console.log(err.message);
// });

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async Task Completed..😍");

    let task = true;
    if (task) {
      resolve({ data: "Hello Guys Welcome Back to SW 🙂" });
    } else {
      reject({ Message: "Error..❌" });
    }
  }, 1000);
})
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Always Work Finally Block");
  });
