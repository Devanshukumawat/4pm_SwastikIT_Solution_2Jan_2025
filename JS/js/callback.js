// function fun(a, b, myCall) {
//   console.log(a * b);
//   myCall();
// }

// function callBack() {
//   console.log("Hello I am a callBack fun");
// }

// fun(8, 9, callBack);

// function fun1(a, b) {
//   console.log(a * b);
//   callBack();
//   callBack2();
// }

// function callBack() {
//   console.log("Hello I am a callBack fun");
// }

// function callBack2() {
//   console.log("Hello i am a callback fun2 hahahah");
// }

// fun1(9, 9); // task1 - callback

// fun1(8, 7); // task2 - callback2

function fun(a, b, myCall, i) {
  console.log(a * b);
  myCall();
  i();
}

function callBack1() {
  console.log("Hello I am a callBack fun1");
}

function test() {
  console.log("Testing");
}

function callBack2() {
  console.log("Hello I am a callBack fun2");
}

// fun(8, 9, callBack1); // task1 - callback1

// fun(2, 2, callBack2); // task-2 - callback2

fun(8, 9, callBack1, test);
