// let n = 5;
// for(let i=0;i<n;i++){
//     console.log("hello, ",i);
// }
// console.log("bye");

// let args = process.argv
// for(let i=2;i<args.length;i++){
//     console.log('hello & welcome to ',args[i]);
// }
// console.log(process.argv);

// output

// PS C:\Users\tyagi\Desktop\Vardan Tyagi\backend> node script.js vardan shradha raman aashirvad neha
// hello & welcome to  vardan
// hello & welcome to  shradha
// hello & welcome to  raman
// hello & welcome to  aashirvad
// hello & welcome to  neha

// const math = require('./math')

// console.log(math.sum(2,5));
// console.log(math.mul(2,5));
// console.log(math);

// const fruits = require('./Fruits') // ./Fruits.index
// console.log(fruits);
// console.log(fruits[0].name);

import { sum , PI } from "./math.js";

console.log(sum(2,5));
console.log(PI);

import { generate } from "random-words";

console.log(generate());