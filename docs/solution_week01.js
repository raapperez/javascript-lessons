const _ = require('lodash');

// Write a function that receives an array and a number.
// It returns the sum of all elements of the array that is greater than the number.


// let arr = [10, 40, 50, 60];
// let j = 3;
// console.log(arr[j]);

// function greaterSum(array, n) {
//   let acc = 0;
//   for(let i = 0; i < array.length; i=i+1) {
//       const elem = array[i];
//       if(elem > n) {
//         acc = acc + elem;
//       }
//   }
//     return acc;
// }

// console.log(greaterSum([1,2,3,4], 2) === 7);
// console.log(greaterSum([1,2,3,4], 8) === 0);
// console.log(greaterSum([], 6) === 0);


// function sumEvenElements(array) {
//     let acc = 0;

//     for(let i = 0; i < array.length; i= i + 2) {
//         acc = acc + array[i];
//     }

//     return acc;
// }


// console.log(sumEvenElements([1,2,3]) === 4);
// console.log(sumEvenElements([1,2,3, 4]) === 4);
// console.log(sumEvenElements([1,2,3, 4, 10]) === 14);
// console.log(sumEvenElements([]) === 0);

// Write a function that receives an array and a number.
// It returns the sum of all elements of the array that is greater than the number.

// 1 1 2 3 5 8 13 21

function fibonacci(n) {
  if(n <= 1) {
    return 1;
  }

  for(let i = 0; ) {

  }


  if (n <= 2) {
      return 2;
  }

}

console.log(fibonacci(0) === 1);
console.log(fibonacci(1) === 1);
console.log(fibonacci(2) === 2);
console.log(fibonacci(3) === 3);
console.log(fibonacci(4) === 5);
console.log(fibonacci(5) === 8);
console.log(fibonacci(6) === 13);
