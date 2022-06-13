// const chalk = require("chalk");
const { arrayOfNumbers } = require("./sum.js");
const { numbers, name, hometown } = require("./data");
const cowsay = require("cowsay");
const { arrayOfNumbers, shuffle } = require("lodash");

console.log(numbers);
console.log(name, "is from", hometown);
console.log(sum);
// arrayOfNumbers();
// console.log(arrayOfNumbers(numbers));
console.log(
  cowsay.say({
    text: "Hello World",
    e: "oO",
    T: "U ",
  })
);
