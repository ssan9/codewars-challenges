// Write a function solution that returns an arbitrary integer which is greater than N, not greater than 10^9, and that ends with 0. You can assume that N 
// is between 1 and 999,999,999.

// For example, given N =27, your function may return 60 and for N = 30, your function may return 40.

function solution(N) {
  
  let random = Math.floor(Math.random() * 100) + N;
     while(random%10 != 0) {
     random ++;
   }
  if (random>1000000000) {
     return 0;
   }
  return random;
}

console.log(solution(999999999));

function solution(N) {
  if(N<1 || N>999999999) {
    return 0;
  }
  else if(N%10 == 0) {
    N+=10;
  }
  else {
    while(N%10 !=0) {
      N++;
    }
  }
  return N;
}
console.log(solution(999999999));