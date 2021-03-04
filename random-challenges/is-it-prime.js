// function isItPrime(num) {
//   let count = 0;
  
//   for (i = 2; i < num; i++) {
//     if (num % i === 0) {
//       count++;
//     }
//   }
//   if (count === 0) {
//    return true; 
//   }
//   return false;
// }

console.log(isItPrime(5));

function isItPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}