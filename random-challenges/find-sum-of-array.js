// function sum(array) {
//   const sumArray = array.reduce((total, num) => {
//     console.log('num', num, 'total', total);
//     return total + num;
//   });
//   return sumArray;
// }

// const nums = [1, 2, 3, 4, 5];

// const sum = nums.reduce((total, num) => total + num);

// console.log(sum);

function sum(array) {
  let total = 0;
  for (i = 0; i < array.length; i++) {
    total+= array[i];
  }
  return total;
}

console.log(sum([1,2,3,4,5]));