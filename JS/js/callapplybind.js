// call apply & bind

// const person1 = {
//   userName: "Devanshu",
//   welcome: function (age) {
//     console.log(`Hello My name is ${this.userName} age :- ${age}`);
//   },
// };

// const person2 = {
//   userName: "Manny",
// };

// person1.welcome(13);
// person1.welcome.call(person2, 56);

// call

const Greet = function (age, msg) {
  console.log(`Hello My name is ${this.userName} age :- ${age} Msg :- ${msg} `);
};

const person1 = {
  userName: "Devanshu",
};
const person2 = {
  userName: "Manny",
};
const person3 = {
  userName: "Daisy",
};

// Greet.call(person1, 45);
// Greet.call(person2, 56);
// Greet.call(person3, 34);

// call
// Greet.call(person2, 45, "Waah Yaar");

//apply
// Greet.apply(person1, [67, "Hello Yaar"]);

//Bind
// const GreetValue = Greet.bind(person1, 45, "Hahahhah");
// GreetValue();
