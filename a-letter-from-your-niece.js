// Your sweet 4 year old niece has sent you a letter, however she is a little bit of an odd ball, so it needs a bit of decoding.
// You see she seems to love dinosars and often throws "trex" and "raptor" in mid sentence when she gets excited, and is convinced
// all vowels should be replaced by numbers (a=0, e=1, i=2, o=3, u=4).

// Your challenge is to figure out what she is trying to say and fix her grammar- HINT - All sentences begin with a capital letter,
// end in a full stop and "I" should be capitalised, no need for capitals for names, she's only 4 after all :)

// function nonsense(str) {
//   let arr = [];
//   for (let i = 0; i < str.length; i++) {
//     if (i == 0) {
//       arr.push(str[i].toUpperCase());
//     }
//     if (i !== 0){
//       arr.push(str[i].toLowerCase());
//     }
//     if ((str[i] == 't' || str[i] == 'T') && (str[i + 1] == 'r' || str[i + 1] == 'R') && (str[i + 2] == 'e' || str[i + 2] == 'E') && (str[i + 3] == 'x' || str[i + 3] == 'X')) {
//       arr.pop();
//     }
//     if ((str[i] == 'r' || str[i] == 'R') && (str[i - 1] == 't' || str[i - 1] == 'T') && (str[i + 1] == 'e' || str[i + 1] == 'E') && (str[i + 2] == 'x' || str[i + 2] == 'X')) {
//       arr.pop();
//     }
//     if ((str[i] == 'e' || str[i] == 'E') && (str[i - 2] == 't' || str[i - 2] == 'T') && (str[i - 1] == 'r' || str[i - 1] == 'R') && (str[i + 1] == 'x' || str[i + 1] == 'X')) {
//       arr.pop();
//     }
//     if ((str[i] == 'x' || str[i] == 'X') && (str[i - 1] == 'e' || str[i - 1] == 'E') && (str[i - 2] == 'r' || str[i - 2] == 'R') && (str[i - 3] == 't' || str[i - 3] == 'T')) {
//       arr.pop();
//     }
//     if ((str[i] == 'r' || str[i] == 'R') && (str[i + 1] == 'a' || str[i + 1] == 'A') && (str[i + 2] == 'p' || str[i + 2] == 'P') && (str[i + 3] == 't' || str[i + 3] == 'T') && (str[i + 4] == 'o' || str[i + 4] == 'O') && (str[i + 5] == 'r' || str[i + 5] == 'R')) {
//       arr.pop();
//     }
//     if ((str[i] == 'a' || str[i] == 'A') && (str[i - 1] == 'r' || str[i - 1] == 'R') && (str[i + 1] == 'p' || str[i + 1] == 'P') && (str[i + 2] == 't' || str[i + 2] == 'T') && (str[i + 3] == 'o' || str[i + 3] == 'O') && (str[i + 4] == 'r' || str[i + 4] == 'R')) {
//       arr.pop();
//     }
//     if ((str[i] == 'p' || str[i] == 'P') && (str[i - 1] == 'a' || str[i - 1] == 'A') && (str[i - 2] == 'r' || str[i - 2] == 'R') && (str[i + 1] == 't' || str[i + 1] == 'T') && (str[i + 2] == 'o' || str[i + 2] == 'O') && (str[i + 3] == 'r' || str[i + 3] == 'R')) {
//       arr.pop();
//     }
//      if ((str[i] == 't' || str[i] == 'T') && (str[i - 1] == 'p' || str[i - 1] == 'P') && (str[i - 2] == 'a' || str[i - 2] == 'A') && (str[i - 3] == 'r' || str[i - 3] == 'R') && (str[i + 1] == 'o' || str[i + 1] == 'O') && (str[i + 2] == 'r' || str[i + 2] == 'R')) {
//       arr.pop();
//     }
//      if ((str[i] == 'o' || str[i] == 'O') && (str[i - 1] == 't' || str[i - 1] == 'T') && (str[i - 2] == 'p' || str[i - 2] == 'P') && (str[i - 3] == 'a' || str[i - 3] == 'A') && (str[i - 4] == 'r' || str[i - 4] == 'R') && (str[i + 1] == 'r' || str[i + 1] == 'R')) {
//       arr.pop();
//     }
//     if ((str[i] == 'r' || str[i] == 'R') && (str[i - 1] == 'o' || str[i - 1] == 'O') && (str[i - 2] == 't' || str[i - 2] == 'T') && (str[i - 3] == 'p' || str[i - 3] == 'P') && (str[i - 4] == 'a' || str[i - 4] == 'A') && (str[i - 5] == 'r' || str[i - 5] == 'R')) {
//       arr.pop();
//     }
//     if ((str[i] == 'i' || str[i] == 'I') && str[i - 1] == ' ' && str[i + 1] == ' ') {
//       arr.pop();
//       arr.push('I');
//     }
//     if (str[i] !== ' ' && str[i] == 0) {
//       arr.pop();
//       arr.push('a');
//     }
//     if (i == 0 && str[i] !== ' ' && str[i] == 0) {
//       arr.pop();
//       arr.push('A');
//     }
//     if (i !== 0 && str[i] == 1) {
//       arr.pop();
//       arr.push('e');
//     }
//     if (i == 0 && str[i] == 1) {
//       arr.pop();
//       arr.push('E');
//     }
//     if (i !== 0 && str[i] == 2) {
//       arr.pop();
//       arr.push('i');
//     }
//     if (i !== 0 && str[i] == 2 && str[i - 1] === ' ' && str[i + 1] === ' ') {
//       arr.pop();
//       arr.push('I');
//     }
//     if (i == 0 && str[i] == 2) {
//       arr.pop();
//       arr.push('I');
//     }
//     if (i !== 0 && str[i] == 3) {
//       arr.pop();
//       arr.push('o');
//     }
//     if (i == 0 && str[i] == 3) {
//       arr.pop();
//       arr.push('O');
//     }
//     if (i !== 0 && str[i] == 4) {
//       arr.pop();
//       arr.push('u');
//     }
//     if (i == 0 && str[i] == 4) {
//       arr.pop();
//       arr.push('U');
//     }
//   }
//   if(str[str.length - 1] !== '.') {
//       arr.push('.');
//   }
//   return arr.join('');
// }

// revised:

function nonsense(str) {
  let arr = [];
  for (let item of str) {
    switch (item) {
      case '0':
        arr.push('a');
        break;
      case '1':
        arr.push('e');
        break;
      case '2':
        arr.push('i');
        break;
      case '3':
        arr.push('o');
      break;
        break;
      case '4':
        arr.push('u');
        break;
      default:
        arr.push(item)
        break;
    }
  }
  if(str[str.length - 1] !== '.') {
      arr.push('.');
  }
  
  let firstLetter = arr[0].toUpperCase();
  let removeFirst = arr.slice(1);
  let remainingLetters = removeFirst.join('').toLowerCase();
  let newString = firstLetter + remainingLetters;
  newString = newString.replace('trex', '');
  newString = newString.replace('raptor', '');
  newString = newString.replace(/ i /g, ' I ');
  return newString;
}

// function nonsense(str) {
//     str = str.split('')
//     if(str[str.length - 1] !== '.')
//     {
//         str.push('.')
//     }
//     let newStr = ''
//     for(let i = 0; str.length > i; i++) {
//         switch (str[i]) {
//             case '0': str[i] = 'a'; break;
//             case '1': str[i] = 'e'; break;
//             case '2': str[i] = 'i'; break;
//             case '3': str[i] = 'o'; break;
//             case '4': str[i] = 'u'; break;
//             default: str[i];
//         }
//         newStr+= `${str[i].toLowerCase()}`
//     }
//     str = newStr[0]
//         .toUpperCase() + newStr.slice(1, newStr.length)
//         .replace('trex','')
//         .replace('raptor','')
//         .replace('i ', 'I ')
//         .replace(' i ', ' I ')
//         .replace(' i ', ' I ')
//     return str;
// }


// function nonsense(str) {
//   let newStr = [];
//   for (let i in str) {
//     if (str[i] === "0") {
//       newStr.push("a");
       
//     } else if (str[i] === "1") {
//       newStr.push("e");
      
//     } else if (str[i] === "2") {
//       newStr.push("i");
      
//     } else if (str[i] === "3") {
//       newStr.push("o");
      
//     } else if (str[i] === "4") {
//       newStr.push("u");
      
//     } else {
//       newStr.push(str[i]);
//     }
    
//   }
//   let answer = newStr.join("").toLowerCase().replace("trex", "").replace("raptor", "").replace(" i ", " I ").replace(" i can", " I can").replace(" i am", " I am");
//   if (answer[answer.length-1] !== ".") {
//     answer += ".";
//   };
//   return answer.charAt(0).toUpperCase() + answer.substring(1);
// }

// function nonsense(str) {
//   let str_array = str.toLowerCase().split('');
//   let test1 = [];
   
//   for (let i = 0; i< str_array.length ; i++){
//     if(str_array[i] === "1") {test1.push("e")} 
//     else if(str_array[i] === "0") {test1.push("a")} 
//     else if(str_array[i] === "2") {test1.push("i")} 
//     else if(str_array[i] === "3") {test1.push("o")} 
//     else if(str_array[i] === "4") {test1.push("u")} 
   
//     else{
//     test1.push(str_array[i])}
//   } // forend
//     test1[0] = test1[0].toUpperCase();
    
//     if (test1[test1.length-1] !== ".")
//     {test1.push(".")}
  
//   return test1.join('').replace("trex", "").replace("raptor", "").
// replace("i ", "I ").replace(" i " , " I ").replace(" i can" , " I can");
// } 

// function nonsense(str) {
//   let arr =[]
//   for (let key of str) {
//       switch (key) {
//         case '0': arr.push('a')
//           break;
//           case '1': arr.push('e')
//           break;
//           case '2': arr.push('i')
//           break;
//           case '3': arr.push('o')
//           break;
//           case '4': arr.push('u')
//           break;
//         default: arr.push(key)
//           break;
//       }
//   }
//   arr[arr.length-1] !=='.' && arr.push('.')
//   str= arr.join('').toLowerCase()
//   let newStr = str[0].toUpperCase() + str.slice(1)
//   newStr= newStr.replace('trex', '')
//   newStr = newStr.replace('raptor', '')
//    newStr = newStr.replace(' i ', ' I ').replace(' i ', ' I ').replace(' i ', ' I ').replace(' i ', ' I ').replace(' i ', ' I ').replace(' i ', ' I ')
//   return newStr
// }

// function nonsense(str) {
//   str= str.toLowerCase();
//   for(let i in str){
  //   str= str.replace('0', 'a');
  //   str= str.replace('1', 'e');
  //   str= str.replace('2', 'i');
  //   str= str.replace('3', 'o');
  //   str= str.replace('4', 'u');
  //   str= str.replace('raptor', '');
  //   str= str.replace('trex', '');
  //   str= str.replace(' i ', ' I ')
    // }
//   if(str.slice(-1)==='.'){
//   return str.charAt(0).toUpperCase() + str.slice(1)}
//   else return str.charAt(0).toUpperCase() + str.slice(1) + '.';
// }

// const nieceDictionary = {
//   0: 'a',
//   1: 'e',
//   2: 'i',
//   3: 'o',
//   4: 'u',
// };
// function nonsense(str) {

//   let decodeStr = str.split('').map(letter => letter > 4 || isNaN(letter) || letter === ' ' ? letter : nieceDictionary[letter]).join('').toLowerCase();
//   decodeStr = decodeStr[0].toUpperCase() + decodeStr.slice(1);


//   if (decodeStr.includes('trex')) {
//     decodeStr = decodeStr.split('trex').join('');
//   }

//   if (decodeStr.includes('raptor')) {
//     decodeStr = decodeStr.split('raptor').join('');
//   }

//   if (!decodeStr.endsWith('.')) {
//     decodeStr = decodeStr + '.';
//   }
  
//     const finalStr = decodeStr.replace(/ i /g, ' I ');

//   return finalStr;
// }


console.log(nonsense("d2n3S04Rs i 0r1 c33L."));
// // "Dinosaurs are cool.")
console.log(nonsense("h1Ll3 Wtrex3raptorRLD"));
console.log(nonsense("2 think therefore i am"));
console.log(nonsense("Do not tell araptortrexnyone but you are my favourite"));
console.log(nonsense("My teacher got sad with me today because 2 ate all the glue."));
console.log(nonsense("Today at school I saved a cat by dressing up as 2ronman and flying 2nto the tree"));
console.log(nonsense("When I grow up I am going to be just like indiana jones and raid all the tomRaptoRbs and find a time travelling device so that I can go hang with my dinosaur friends"));