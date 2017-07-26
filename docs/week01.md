# Javascript Basics

### The language

JavaScript is a high-level, dynamic, weakly typed, object-based, multi-paradigm, and interpreted client-side programming language. Alongside HTML and CSS, JavaScript is one of the three core technologies of World Wide Web content production. (wikipedia)

Javascript can also be used in backend development with Node.js

### Softwares to play with Javascript:

* Noje.js - https://nodejs.org/en/
* Visual Studio Code - https://code.visualstudio.com

To execute the script.js run the command ```node script.js``` in the cmd (windows) or in the terminal (linux and mac).

Visual Studios Code Extensions:
* EsLint
* Beautify css/sass/scss/less

### Having fun
#### Hello world / print (console.log)
#### let and const
#### strings and numbers
#### + - / * %
#### booleans (true and false)
#### > >= < <= === !==
#### && ||
#### if and else
#### switch case
#### arrays
#### objects
#### for and while
```
const array = [10,20,30,40];

for(let i = 0; i < array.length; i=i+1) {
  console.log(array[i]);
}
>> 10
>> 20
>> 30
>> 40

let i = 0;
while(i < array.length) {
  console.log(array[i]);
  i = i+1;
}
>> 10
>> 20
>> 30
>> 40

```
#### functions
```
function sum(a, b) {
  return a + b;
}
console.log(sum(10, 15));
>> 25

function pow(n, x) {
  if(x === 0) {
    return 1;
  }
  return n * pow(n, x -1);
}

console.log(pow(2, 10));
>> 1024
console.log(pow(2, 3));
>> 8
```

### Homework

1. Write a function that receives an array and a number. It returns the sum of all elements of the array that is greater than the number.
```
function greaterSum(array, n) {
  // write your code here
}

console.log(greaterSum([1,2,3,4], 2));
>> 7
console.log(greaterSum([1,2,3,4], 8));
>> 0
console.log(greaterSum([], 6));
>> 0
```
2. Write a function that returns the nth element of a fibonacci sequence. A fibonacci sequence is a sequence where the nth element is a sum of the previous 2 elements. The first two elements are 1.
```
function fibonacci(n) {
  // write your code here
}

console.log(fibonacci(1));
>> 1
console.log(fibonacci(2));
>> 1
console.log(fibonacci(3));
>> 2
console.log(fibonacci(4));
>> 3
console.log(fibonacci(5));
>> 5
console.log(fibonacci(6));
>> 8
console.log(fibonacci(7));
>> 13
```
