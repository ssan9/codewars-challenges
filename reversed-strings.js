// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'


function solution(str){
  let strSplit = str.split('');
  let reversedString = [];
  for(let i = 0; i = strSplit.length; i++) {
    let popString = strSplit.pop(strSplit[i]);
    reversedString.push(popString);
  }
  return reversedString.join('');
}

console.log(solution('yum'));

// function solution(str){
//   return str.split('').reverse().join('');  
// }
