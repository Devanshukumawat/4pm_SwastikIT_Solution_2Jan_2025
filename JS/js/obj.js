const prompt = require("prompt-sync")();

// const product = {
//   ProductName: "I-Phone",
//   ProductSeries: "16",
//   ProductPrice: "999$",
//   ProductColor: "Black",
// };

// const { ProductName, ProductPrice, ProductSeries, ProductColor } = product;

// console.log(
//   `Name :- ${ProductName} Color :- ${ProductColor} Price :- ${ProductPrice} Series :- ${ProductSeries}`
// );

// console.log(product);
// console.log(product.ProductName);
// console.log(product.ProductColor);

// console.log(
//   ` Name :- ${product.ProductName} Series:- ${product.ProductSeries} Price:- ${product.ProductPrice} Color :- ${product.ProductColor}`
// );

// const product = {
//   ProductName: "I-Phone",
//   ProductSeries: "16",
//   ProductPrice: "999$",
//   ProductColor: "Black",
//   Address: {
//     city: "Jaipur",
//     PinCode: 34567,
//   },
// };

// const Pcity = product.Address.city;
// console.log(Pcity);

// const { city, PinCode } = product.Address;
// console.log(PinCode);

// const product = {
//   ProductName: "I-Phone",
//   ProductSeries: "16",
//   ProductPrice: "999$",
//   ProductColor: "Black",
//   Address: {
//     city: "Jaipur",
//     PinCode: 34567,
//   },
//   AllDetails: function () {
//     console.log(
//       `ProductName:- ${this.ProductName} ProductSeries :- ${this.ProductSeries} ProductPrice :- ${this.ProductPrice} Address :- ${this.Address.city},${this.Address.PinCode}`
//     );
//   },
// };

// product.AllDetails();

// const Promo_Code = {
//   DEVANSHUSIR: "50",
//   SWASTIKIT: "40",
//   MERN: "60",
//   FIRST: "80",
// };
// JSON.stringify(Promo_Code);
// const promo = Promo_Code["DEVANSHUSIR"];
// console.log(promo);

//fee - 25000
// USERINPUT = PROMPT - enter Promo_code - mern 60%
// console - You have to pay ------

// const Promo_Code = {
//   DEVANSHUSIR: 50,
//   SWASTIKIT: 40,
//   MERN: 60,
//   FIRST: 80,
// };

// const userInput = prompt("Enter Promo_code :- ").toUpperCase();
// const PromoValue = Promo_Code[userInput];
// const fee = 25000;
// const discount = (fee * PromoValue) / 100;
// const finalFee = fee - discount;

// console.log(`You Discount :- ${discount}/₹ You have to pay :- ${finalFee}/₹`);

const Products = [
  {
    ProductName: "I-Phone",
    address: {
      city: "Jaipur",
    },
  },
  {
    ProductName: "Samsung",
    address: {
      city: "Ajmer",
    },
  },
  {
    ProductName: "MI",
    address: {
      city: "Sambhar",
    },
  },
  {
    ProductName: "Samsung",
    address: {
      city: "Kota",
    },
  },
];

const search = Products.filter((value, index) => {
  return value.ProductName == "Samsung";
});

console.log(search);
// const allValue = Products.map((value, index) => {
//   //   console.log(value.ProductName);
//   console.log(value.address.city);
//   //   return value;
// });

// console.log(allValue);
