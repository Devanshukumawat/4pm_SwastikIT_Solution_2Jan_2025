//Spread - Unpack
// Rest - pack

// copy
// const myArray = [2, 3, 4, 5, 6];

// const myNewArray = [...myArray];

// console.log(myNewArray);

//merge

// const one = [43, 2, 1];
// const two = [5, 3, 2, 2];

// const three = [...one, ...two];

// console.log(three);

// Obj

// const obj1 = {
//   user: "Devanshu",
// };

// copy - Shallow Copy

// const obj1 = { ...obj };
// console.log(obj1);

// const obj2 = {
//   city: "Jaipur",
// };

// const obj3 = {
//   ...obj1,
//   ...obj2,
// };

// console.log(obj3);

// rest ... - pack

function add(...number) {
  // [20,20] // pack - (rest)
  let result = 0;

  for (let num of number) {
    result += num;
  }

  return result;
}

const numbers = [20, 20, 63, 45, 6, 7, 8, 8];

const output = add(...numbers); // 20 ,20 // unpack(Spread)
console.log(output);

// console.log(add(3, 6, 6, 8));

// const myarray = [62, 2, 2, 2, 2];

// for (let num of myarray) {
//   console.log(num);
// }
