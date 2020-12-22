// Your task is to write a function named do_math that receives a single argument. This argument is a string that contains multiple whitespace
// delimited numbers. Each number has a single alphabet letter somewhere within it.

// Example : "24z6 1x23 y369 89a 900b"
// As shown above, this alphabet letter can appear anywhere within the number. You have to extract the letters and sort the numbers according to
// their corresponding letters.

// Example : "24z6 1x23 y369 89a 900b" will become 89 900 123 369 246 (ordered according to the alphabet letter)
// Here comes the difficult part, now you have to do a series of computations on the numbers you have extracted.

// The sequence of computations are + - * /. Basic math rules do NOT apply, you have to do each computation in exactly this order.
// This has to work for any size of numbers sent in (after division, go back to addition, etc).
// In the case of duplicate alphabet letters, you have to arrange them according to the number that appeared first in the input string.
// Remember to also round the final answer to the nearest integer.
// Examples :
// "24z6 1x23 y369 89a 900b" = 89 + 900 - 123 * 369 / 246 = 1299
// "24z6 1z23 y369 89z 900b" = 900 + 369 - 246 * 123 / 89 = 1414
// "10a 90x 14b 78u 45a 7b 34y" = 10 + 45 - 14 * 7 / 78 + 90 - 34 = 60

function doMath(s){
  //your code here
  // b = index
  // replace = replaces a part of a string with a different string using regex
  // n =  regular expression to remove anything that is not a number
  // c = reg. exp. to do a global search for digit characters and basically converting to ascii characters or converting to character codes; returns UTF-16 code unit at the given index
  let p = s.split(' ')
           .map((a, b) => ({b: b, n: +a.replace(/[a-z]/gi, ''), c: a.replace(/\d/g, '').charCodeAt(0)}))
           .sort((x, y) => x.c-y.c || x.i-y.i)
           .map(a => a.n);
  
   const computations = [
    (subtotal, num) => subtotal + num,
    (subtotal, num) => subtotal - num,
    (subtotal, num) => subtotal * num,
    (subtotal, num) => subtotal / num,
  ];
  
  // Remove first value so operation can start with + with first and second value:
  let subtotal = p.shift();
  const l = p.forEach((num, i) => {
    subtotal = computations[i % 4](subtotal, num);
  });
  
  return Math.round(subtotal)
}

console.log(doMath('24z6 1x23 y369 89a 900b'));
console.log(doMath('24z6 1z23 y369 89z 900b'));
console.log(doMath('10a 90x 14b 78u 45a 7b 34y'));

// function doMath(s){
//   let r = s.split(' ')
//            .map((x, i) => ({i: i, n: +x.replace(/[a-z]/gi, ''), c: x.replace(/\d/g, '').charCodeAt(0)}))
//            .sort((x, y) => x.c-y.c || x.i-y.i)
//            .map(x => x.n)
//   let n = r[0]
//   let math = ['+','-','*','/']
//   for (let i=1;i<r.length;i++){
//     n=eval(`${n}${math[(i-1)%4]}${r[i]}`)
//   }
//   return Math.round(n)
// }



// 'use strict';

// console.log(doMath("10a 90x 14b 78u 45a 7b 34y"));

// function separateWord(word) {
//   let char;
//   const num = Number(
//     word.replace(
//       /[a-z]/i,
//       match => {
//         char = match;
//         return ''; // replace this match with the empty string
//       }
//     )
//   );
//   return { char, num };
// }
// function getOrderedNumbers(numbersByChar) {
//   return Object.entries(numbersByChar)
//     .sort((a, b) => (a[0] > b[0]) - 0.5) // Order entries alphabetically
//     .map(entry => entry[1]) // Take only the value of each entry
//     .flat(); // Turn the array of arrays of numbers into a single array of numbers
// }
// // Entry point:
// function doMath(inputStr) {
//   const numbersByChar = {};
//   for (const word of inputStr.split(' ')) {
//     const { char, num } = separateWord(word);
//     if (!numbersByChar[char]) {
//       numbersByChar[char] = [];
//     }
//     numbersByChar[char].push(num);
//   }
//   const numbersArr = getOrderedNumbers(numbersByChar);
//   return getTotal(numbersArr);
// }

// function getTotal(numbersArr) {
//   const fns = [
//     (subtotal, num) => subtotal + num,
//     (subtotal, num) => subtotal - num,
//     (subtotal, num) => subtotal * num,
//     (subtotal, num) => subtotal / num,
//   ];
//   // Remove first value so operation can start with + with first and second value:
//   let subtotal = numbersArr.shift();
//   numbersArr.forEach((num, i) => {
//     subtotal = fns[i % 4](subtotal, num);
//   });
//   return Math.round(subtotal);
// }

