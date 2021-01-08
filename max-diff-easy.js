// You must implement a function that return the difference between the biggest and the smallest value in a list(lst) received as parameter.

// The list(lst) contains integers, that means it may contain some negative numbers.

// If the list is empty or contains a single element, return 0.

// The list(lst) is not sorted.

// maxDiff([1, 2, 3, 4]); // return 3, because 4 - 1 == 3
// maxDiff([1, 2, 3, -4]); // return 7, because 3 - (-4) == 7


function maxDiff(list) {
   if(list.length === 0) {
      return 0;
  }
  const maxList = Math.max(...list);
  const minList = Math.min(...list);
  return maxList - minList;
};

// function maxDiff(list) {
//   const sortedList = list.sort((a, b) => a-b);
//   return sortedList[list.length - 1] - sortedList[0] | 0;
// };

// function maxDiff(list) {
// if(list.length > 1 ) {
// list.sort(function(a,b){ return a - b  });
// return list[list.length-1] - list[0];
// } else  {
//   return 0;
// }
// };

// function maxDiff(list) {
//   list.sort((a,b)=>a-b);
//   return list.length? list[list.length-1] - list[0]: 0;
// };