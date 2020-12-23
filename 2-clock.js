// Clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.

// Your task is to make 'Past' function which returns time converted to milliseconds.

// Example:
// past(0, 1, 1) == 61000


function past(h, m, s){
  //#Happy Coding! ^_^
  let hm = h * 60 * 60 * 1000
  let mm = m * 60 * 1000
  let sm = s * 1000
  return hm + mm + sm;
}


console.log(past(0,1,1));
console.log(past(1,1,1));
console.log(past(0,0,0));
console.log(past(1,0,1));
console.log(past(1,0,0));

// function past(h, m, s){
//   return ((h*3600)+(m*60)+s)*1000;
// }