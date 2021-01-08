// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// => [6,7]

function largest(n,xs){
  const sortedList = xs.sort((a, b) => a - b);
  return n === 0 ? [] : sortedList.slice(-n);
}

// function largest(n,xs){
//   return xs.sort(function(a, b) {return a - b;}).slice(xs.length-n);
// }

const largest = function(n,xs){
  return n === 0 ? [] : xs.sort((a, b)=> a - b).slice(-n)
}