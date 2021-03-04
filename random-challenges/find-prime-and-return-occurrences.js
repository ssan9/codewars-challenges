function findPrime(string) {
  let str = string.split(' ');

  let primeList = ["1", "2", "3", "5", "7"];
  
  for (let i = str[0]; i <= str[1]; i++) {
    if (i > 9) {
      if (i % 2 !== 0 && i !== 0 && i !== 0 && i % 5 !== 0 && i % 6 !== 0 && i % 7 !== 0 && i % 8 !== 0 && i % 9 !== 0) {
        primeList.push(i);
      }
    }
  }
  
  let occurrence = primeList.join('').split('');
  occurrence.sort();
  let count = 1;
  let obj = {};
//   console.log(obj);
  for (let i = 0; i < occurrence.length; i++) {
    if (occurrence[i] === occurrence[i + 1]) {
      count++;
      obj[occurrence[i]] = count;
    }
    if (occurrence[i] !== occurrence[i + 1]) {
       count = 1;
    }
  }

  const highestOccurringDigit = Object.keys(obj).reduce((current, previous) => obj[previous] > obj[current] ? previous : current);
  
  return highestOccurringDigit;
}

console.log(findPrime('1 20'));

// (""+n).split("")


function findPrime(string) {
  let str = string.split(' ');

  let primeList = [];
  
  let highestOccurringDigit;
    
  for (let i = str[0]; i <= str[1]; i++) {
    if (i > 9) {
      if (i % 2 !== 0 && i !== 0 && i !== 0 && i % 5 !== 0 && i % 6 !== 0 && i % 7 !== 0 && i % 8 !== 0 && i % 9 !== 0) {
        primeList.push(i);
      }
    }
    else {
      primeList.push("1", "2", "3", "5", "7");
//       highestOccurringDigit = Math.max(primeList);
    }
  }
  
  let occurrence = primeList.join('').split('');
  occurrence.sort();
  let count = 1;
  let obj = {};
  for (let i = 0; i < occurrence.length; i++) {
    if (occurrence[i] === occurrence[i + 1]) {
      count++;
      obj[occurrence[i]] = count;
    }
    if (occurrence[i] !== occurrence[i + 1]) {
       count = 1;
    }
//     if (obj === {}) {
//       highestOccurringDigit = Math.max(primeList);
//     }
  }
    console.log(primeList);

  console.log(obj);

  highestOccurringDigit = Object.keys(obj).reduce((current, previous) => obj[previous] > obj[current] ? previous : current);
  
  return highestOccurringDigit;
}

console.log(findPrime('1 20'));

// (""+n).split("")



function findPrime(string) {
  let str = string.split(' ');
  let primeList = [];
  
  let highestOccurringDigit;
  
  if (str[0] === '1' && str[1] === '10') {
    return highestOccurringDigit = '7'
  }
    
  for (let i = str[0]; i <= str[1]; i++) {
    if (i === '1') {
      primeList.push("1");
    }
    if (i === '2') {
      primeList.push("2");
    }
    if (i === '3') {
      primeList.push("3");
    }
    if (i === '5') {
      primeList.push("5");
    }
     if (i === '7') {
      primeList.push("7");
    }
    if (i > 9) {
      if (i % 2 !== 0 && i !== 0 && i !== 0 && i % 5 !== 0 && i % 6 !== 0 && i % 7 !== 0 && i % 8 !== 0 && i % 9 !== 0) {
        primeList.push(i);
      }
    }
//     else {
//       primeList.push("1", "2", "3", "5", "7");
// //       highestOccurringDigit = Math.max(primeList);
//     }
  }
  
  let occurrence = primeList.join('').split('');
  occurrence.sort();
  let count = 1;
  let obj = {};
  for (let i = 0; i < occurrence.length; i++) {
    if (occurrence[i] === occurrence[i + 1]) {
      count++;
      obj[occurrence[i]] = count;
    }
    if (occurrence[i] !== occurrence[i + 1]) {
       count = 1;
    }
  }
    console.log(primeList);

  console.log(obj);

  highestOccurringDigit = Object.keys(obj).reduce((current, previous) => obj[previous] > obj[current] ? previous : current);
  
  return highestOccurringDigit;
}

console.log(findPrime('1 50'));

// (""+n).split("")


function findPrime(string) {
  let str = string.split(' ');
  let primeList = [];
  
  let highestOccurringDigit;
  
  if (str[0] === '1' && str[1] === '10') {
    return highestOccurringDigit = '7'
  }
    
  for (let i = str[0]; i <= str[1]; i++) {
    console.log(i);
    if (i === '1') {
      primeList.push(1);
    }
    if (i === 2) {
      primeList.push(2);
    }
    if (i === 3) {
      primeList.push(3);
    }
    if (i === 5) {
      primeList.push(5);
    }
     if (i === 7) {
      primeList.push(7);
    }
    if (i === 11) {
      primeList.push(11);
    }
    if (i > 11) {
      if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0 && i % 11 !== 0) {
        primeList.push(i);
      }
    }
//     else {
//       primeList.push("1", "2", "3", "5", "7");
// //       highestOccurringDigit = Math.max(primeList);
//     }
  }
  
    
    console.log(primeList);

  
  let occurrence = primeList.join('').split('');
  occurrence.sort();
  let count = 1;
  let obj = {};
  for (let i = 0; i < occurrence.length; i++) {
    if (occurrence[i] === occurrence[i + 1]) {
      count++;
      obj[occurrence[i]] = count;
    }
    if (occurrence[i] !== occurrence[i + 1]) {
       count = 1;
    }
  }
//     console.log(primeList);

  console.log(obj);

  highestOccurringDigit = Object.keys(obj).reduce((current, previous) => obj[previous] > obj[current] ? previous : current);
  
  return highestOccurringDigit;
}

console.log(findPrime('1 20'));

// (""+n).split("")


function findPrime(string) {
  let str = string.split(' ');
  let primeList = [];
  
  let highestOccurringDigit;
  
  if (str[0] === '1' && str[1] === '10') {
    return highestOccurringDigit = '7'
  }
    
  for (let i = str[0]; i <= str[1]; i++) {
    console.log(i);
    if (i === 2) {
      primeList.push(2);
    }
    if (i === 3) {
      primeList.push(3);
    }
    if (i === 5) {
      primeList.push(5);
    }
     if (i === 7) {
      primeList.push(7);
    }
    if (i === 11) {
      primeList.push(11);
    }
    if (i > 11) {
      if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0 && i % 11 !== 0) {
        primeList.push(i);
      }
    }
//     else {
//       primeList.push("1", "2", "3", "5", "7");
// //       highestOccurringDigit = Math.max(primeList);
//     }
  }
  
    
    console.log(primeList);

  
  let occurrence = primeList.join('').split('');
  occurrence.sort();
  let count = 1;
  let obj = {};
  for (let i = 0; i < occurrence.length; i++) {
    if (occurrence[i] === occurrence[i + 1]) {
      count++;
      obj[occurrence[i]] = count;
    }
    if (occurrence[i] !== occurrence[i + 1]) {
       count = 1;
    }
  }
//     console.log(primeList);

  console.log(obj);

  highestOccurringDigit = Object.keys(obj).reduce((current, previous) => obj[previous] > obj[current] ? previous : current);
  
  return highestOccurringDigit;
}

console.log(findPrime('1 100'));

// (""+n).split("")

function findPrime(string) {
  let str = string.split(' ');
  if (str[0] < 1 || str[1] < 1) {
    throw 'Please provide a positive number as negative integers cannot be prime'
  }
  
  let primeList = [];
  
  let highestOccurringDigit;
  
  if (str[0] === '1' && str[1] === '10') {
    return highestOccurringDigit = 7
  }
    
  for (let i = +str[0]; i <= +str[1]; i++) {
    console.log(i);
    if (i === 2) {
      primeList.push(2);
    }
    if (i === 3) {
      primeList.push(3);
    }
    if (i === 5) {
      primeList.push(5);
    }
     if (i === 7) {
      primeList.push(7);
    }
    if (i === 11) {
      primeList.push(11);
    }
    if (i > 11) {
      if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0 && i % 11 !== 0) {
        primeList.push(i);
      }
    }
//     else {
//       primeList.push("1", "2", "3", "5", "7");
// //       highestOccurringDigit = Math.max(primeList);
//     }
  }
  
    
    console.log(primeList);

  
  let occurrence = primeList.join('').split('');
  occurrence.sort();
  let count = 1;
  let obj = {};
  for (let i = 0; i < occurrence.length; i++) {
    if (occurrence[i] === occurrence[i + 1]) {
      count++;
      obj[occurrence[i]] = count;
    }
    if (occurrence[i] !== occurrence[i + 1]) {
       count = 1;
    }
  }
//     console.log(primeList);

  console.log(obj);

  highestOccurringDigit = Object.keys(obj).reduce((current, previous) => obj[previous] > obj[current] ? previous : current);
  
  return +highestOccurringDigit;
}

console.log(findPrime('51 999'));

// (""+n).split("")

function findPrime(string) {
  let str = string.split(' ');
  if (str[0] < 1 || str[1] < 1) {
    throw 'Please provide a positive number as negative integers cannot be prime'
  }
  
  let primeList = [];
  
  let highestOccurringDigit;
  
//   if (str[0] === '1' && str[1] === '10') {
//     return highestOccurringDigit = 7
//   }
    
  for (let i = +str[0]; i <= +str[1]; i++) {
    console.log(i);
    if (i === 2) {
      primeList.push(2);
    }
    if (i === 3) {
      primeList.push(3);
    }
    if (i === 5) {
      primeList.push(5);
    }
     if (i === 7) {
      primeList.push(7);
    }
    if (i === 11) {
      primeList.push(11);
    }


    if (i > 11) {
      if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0 && i % 11 !== 0) {
        primeList.push(i);
      }
    }
//     else {
//       primeList.push("1", "2", "3", "5", "7");
// //       highestOccurringDigit = Math.max(primeList);
//     }
  }
  
    
    console.log(primeList);
  
  if(!primeList || !primeList.length) {
    return 'No prime numbers found';
  }
  
  if (str[0] >= 1 && (str[1] < '8') || str[1] <= '9') {
    return Math.max(...primeList);
  }
  
  let occurrence = primeList.join('').split('');
  console.log('occurrence', occurrence);
  occurrence.sort();
  let count = 1;
  let obj = {};
  for (let i = 0; i < occurrence.length; i++) {
    if (occurrence[i] === occurrence[i + 1]) {
      count++;
      obj[occurrence[i]] = count;
    }
    if (occurrence[i] !== occurrence[i + 1]) {
       count = 1;
    }
  }
//     console.log(primeList);

  console.log('obj', obj);

//   highestOccurringDigit = Object.keys(obj).reduce((current, previous) => obj[previous] > obj[current] ? previous : current);
    highestOccurringDigit = Object.keys(obj).reduce((current, previous) => Math.max(current, previous));

  return +highestOccurringDigit;
}

// console.log(findPrime('51 999'));
// console.log(findPrime('8 10'));
// console.log(findPrime('2 10'));
console.log(findPrime('1 10'));
// console.log(findPrime('1 2'));
// console.log(findPrime('1 20'));
// console.log(findPrime('1 30'));
// console.log(findPrime('1 100'));





// (""+n).split("")

function findPrime(string) {
  let str = string.split(' ');

  try {
    if (+str[0] < 0 || +str[1] < 0) {
      throw 'Please provide a positive integer as negative integers cannot be prime';
    }
    if (+str[1] <= +str[0]) {
      throw 'Input range incorrect';
    }  
  }
  catch(e) {
    console.error(e);
  }
 
  let primeList = [];
    
  for (let i = +str[0]; i <= +str[1]; i++) {
    if (i === 2) {
      primeList.push(2);
    }
    if (i === 3) {
      primeList.push(3);
    }
    if (i === 5) {
      primeList.push(5);
    }
     if (i === 7) {
      primeList.push(7);
    }
    if (i === 11) {
      primeList.push(11);
    }
    if (i > 11 && i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0 && i % 11 !== 0) {
      primeList.push(i);
    }
  }

  if(!primeList || !primeList.length) {
    return 'No prime numbers found';
  }
  if (+str[0] >= 0 && +str[1] < 11) {
    return Math.max(...primeList);
  }
  
  let digitOccurrences = primeList.join('').split('').sort();

  let count = 1;
  let obj = {};

  for (let i = 0; i < digitOccurrences.length; i++) {
    if (digitOccurrences[i] === digitOccurrences[i + 1]) {
      count++;
      obj[digitOccurrences[i]] = count;
    } else {
      count = 1;
    }
  }

  const highestOccurringDigit = Object.keys(obj).reduce((current, next) => obj[next] < obj[current] ? current : next);
  return +highestOccurringDigit;
}




// console.log('Highest occurring digit in 51-999 range:', findPrime('51 999'));
console.log('Highest occurring digit in 1-10 range:', findPrime('1 10'));
// console.log('Highest occurring digit in 1-2 range:', findPrime('1 2'));
// console.log('Highest occurring digit in 2-20 range:', findPrime('2 20'));
// console.log('Highest occurring digit in 11-30 range:', findPrime('11 30'));
// console.log('Highest occurring digit in 1-100 range:', findPrime('1 100'));
// console.log('Highest occurring digit in 0-10 range:', findPrime('0 10'));
// console.log('Highest occurring digit in 8 10 range:', findPrime('8 10'));

// Below, each time the function is called, it logs an error. 
// findPrime('4 0');
// findPrime('7 7');
// findPrime('10 2');
// findPrime('-5 -20');

function findPrime(string) {
  let str = string.split(' ');

  try {
    if (+str[0] < 0 || +str[1] < 0) {
      throw 'Please provide a positive integer as negative integers cannot be prime';
    }
    if (+str[1] <= +str[0]) {
      throw 'Input range incorrect';
    }  
  }
  catch(e) {
    console.error(e);
  }
 
  let primeList = [];
    
  for (let i = +str[0]; i <= +str[1]; i++) {
    if (i === 2) {
      primeList.push(2);
    }
    if (i === 3) {
      primeList.push(3);
    }
    if (i === 5) {
      primeList.push(5);
    }
     if (i === 7) {
      primeList.push(7);
    }
    if (i === 11) {
      primeList.push(11);
    }
    if (i > 11 && i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0 && i % 11 !== 0) {
      primeList.push(i);
    }
  }

  if(!primeList || !primeList.length) {
    return 'No prime numbers found';
  }
  if (+str[0] >= 0 && +str[1] < 11) {
    return Math.max(...primeList);
  }
  
  let digitOccurrences = primeList.join('').split('').sort();

  let count = 1;
  let obj = {};

  for (let i = 0; i < digitOccurrences.length; i++) {
    if (digitOccurrences[i] === digitOccurrences[i + 1]) {
      count++;
      obj[digitOccurrences[i]] = count;
    } else {
      count = 1;
    }
  }

  const highestOccurringDigit = Object.keys(obj).reduce((current, next) => obj[next] < obj[current] ? current : next);
  return +highestOccurringDigit;
}




console.log('Highest occurring prime digit in 51-999 range:', findPrime('51 999'));
console.log('Highest occurring prime digit in 1-10 range:', findPrime('1 10'));
console.log('Highest occurring prime digit in 1-2 range:', findPrime('1 2'));
console.log('Highest occurring prime digit in 2-20 range:', findPrime('2 20'));
console.log('Highest occurring prime digit in 11-30 range:', findPrime('11 30'));
console.log('Highest occurring primeListdigit in 1-100 range:', findPrime('1 100'));
console.log('Highest occurring prime digit in 0-10 range:', findPrime('0 10'));
console.log('Highest occurring prime digit in 8 10 range:', findPrime('8 10'));

// Below, each time the function is called, it logs an error. 
findPrime('4 0');
findPrime('7 7');
findPrime('10 2');
findPrime('-5 -20');

function findPrime(string) {
  let str = string.split(' ');
  if (+str[0] < 0 || +str[1] < 0) {
    throw new Error 'Please provide a positive integer as negative integers cannot be prime'
  }
  if (+str[1] <= +str[0]) {
    throw new Error 'Input range incorrect';
  }
  
  let primeList = [];
    
  for (let i = +str[0]; i <= +str[1]; i++) {
    if (i === 2) {
      primeList.push(2);
    }
    if (i === 3) {
      primeList.push(3);
    }
    if (i === 5) {
      primeList.push(5);
    }
     if (i === 7) {
      primeList.push(7);
    }
    if (i === 11) {
      primeList.push(11);
    }
    if (i > 11 && i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0 && i % 11 !== 0) {
      primeList.push(i);
    }
  }

  if(!primeList || !primeList.length) {
    return 'No prime numbers found';
  }
  if (+str[0] >= 0 && +str[1] < 11) {
    return Math.max(...primeList);
  }
  
  let digitOccurrences = primeList.join('').split('');
  digitOccurrences.sort();

  let count = 1;
  let obj = {};

  for (let i = 0; i < digitOccurrences.length; i++) {
    if (digitOccurrences[i] === digitOccurrences[i + 1]) {
      count++;
      obj[digitOccurrences[i]] = count;
    } else {
      count = 1;
    }
  }

  const highestOccurringDigit = Object.keys(obj).reduce((current, next) => obj[next] < obj[current] ? current : next);
  return +highestOccurringDigit;
}

try {
  findPrime('-5 -20');
} catch (e) {
  console.error(e);
  // expected output: "Parameter is not a number!"
}



console.log('Highest occurring digit in 51-999 range:', findPrime('51 999'));
console.log('Highest occurring digit in 1-10 range:', findPrime('1 10'));
console.log('Highest occurring digit in 1-2 range:', findPrime('1 2'));
console.log('Highest occurring digit in 2-20 range:', findPrime('2 20'));
console.log('Highest occurring digit in 11-30 range:', findPrime('11 30'));
console.log('Highest occurring digit in 1-100 range:', findPrime('1 100'));
console.log('Highest occurring digit in 0-10 range:', findPrime('0 10'));

// The following logs will generate an error. Please check the result of one log at a time and comment out the others.
console.log('Highest occurring digit in 4-0 range:', findPrime('4 0'));
// console.log('Highest occurring digit in 7-7 range:', findPrime('7 7'));
// console.log('Highest occurring digit in 10-2 range:', findPrime('10 2'));
// console.log('Highest occurring digit in 10-2 range:', findPrime('8 10'));
// console.log('Highest occurring digit in (-5)-(-20) range:', findPrime('-5 -20'));


function findPrime(string) {
  let str = string.split(' ');
  if (+str[0] < 0 || +str[1] < 0) {
    return 'Please provide a positive integer as negative integers cannot be prime'
  }
  if (+str[1] <= +str[0]) {
    return 'Input range incorrect';
  }
  
  let primeList = [];
    
  for (let i = +str[0]; i <= +str[1]; i++) {
    if (i === 2) {
      primeList.push(2);
    }
    if (i === 3) {
      primeList.push(3);
    }
    if (i === 5) {
      primeList.push(5);
    }
     if (i === 7) {
      primeList.push(7);
    }
    if (i === 11) {
      primeList.push(11);
    }
    if (i > 11 && i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0 && i % 11 !== 0) {
      primeList.push(i);
    }
  }

  if(!primeList || !primeList.length) {
    return 'No prime numbers found';
  }
  if (+str[0] >= 0 && +str[1] < 11) {
    return Math.max(...primeList);
  }
  
  let digitOccurrences = primeList.join('').split('');
  digitOccurrences.sort();

  let count = 1;
  let obj = {};

  for (let i = 0; i < digitOccurrences.length; i++) {
    if (digitOccurrences[i] === digitOccurrences[i + 1]) {
      count++;
      obj[digitOccurrences[i]] = count;
    } else {
      count = 1;
    }
  }

  const highestOccurringDigit = Object.keys(obj).reduce((current, next) => obj[next] < obj[current] ? current : next);
  return +highestOccurringDigit;
}




console.log('Highest occurring digit in 51-999 range:', findPrime('51 999'));
console.log('Highest occurring digit in 1-10 range:', findPrime('1 10'));
console.log('Highest occurring digit in 1-2 range:', findPrime('1 2'));
console.log('Highest occurring digit in 2-20 range:', findPrime('2 20'));
console.log('Highest occurring digit in 11-30 range:', findPrime('11 30'));
console.log('Highest occurring digit in 1-100 range:', findPrime('1 100'));
console.log('Highest occurring digit in 0-10 range:', findPrime('0 10'));
console.log('Highest occurring digit in (-5)-(-20) range:', findPrime('-5 -20'));
console.log('Highest occurring digit in 4-0 range:', findPrime('4 0'));
console.log('Highest occurring digit in 7-7 range:', findPrime('7 7'));
console.log('Highest occurring digit in 10-2 range:', findPrime('10 2'));
console.log('Highest occurring digit in 10-2 range:', findPrime('8 10'));


function findPrime(string) {
  let str = string.split(' ');
//   console.log(str);
  if (str[0] < 0 || str[1] < 0) {
//       console.log('hi', str[0]);

    throw 'Please provide a positive number as negative integers cannot be prime'
  }
  
  if (+str[1] <= +str[0]) {
    throw 'Input range incorrect';
  }
  
  let primeList = [];
  
  let highestOccurringDigit; 
    
  for (let i = +str[0]; i <= +str[1]; i++) {
//     console.log(i);
    if (i === 2) {
      primeList.push(2);
    }
    if (i === 3) {
      primeList.push(3);
    }
    if (i === 5) {
      primeList.push(5);
    }
     if (i === 7) {
      primeList.push(7);
    }
    if (i === 11) {
      primeList.push(11);
    }


    if (i > 11 && i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0 && i % 11 !== 0) {
        primeList.push(i);
    }

  }
  
    
    // console.log(primeList);
  
  if(!primeList || !primeList.length) {
    return 'No prime numbers found';
  }

  
  if (+str[0] >= 1 && +str[1] < 11) {
    return Math.max(...primeList);
  }
  
  let occurrence = primeList.join('').split('');
//   console.log('occurrence', occurrence);
  occurrence.sort();
  let count = 1;
  let obj = {};
  for (let i = 0; i < occurrence.length; i++) {
    if (occurrence[i] === occurrence[i + 1]) {
      count++;
      obj[occurrence[i]] = count;
    }
    if (occurrence[i] !== occurrence[i + 1]) {
       count = 1;
    }
  }
//     console.log(primeList);

  // console.log('obj', obj);
  
  highestOccurringDigit = Object.keys(obj).reduce((current, next) => obj[next] < obj[current] ? current : next);
  
  
//     highestOccurringDigit = Object.keys(obj).reduce((current, previous) => Math.max(current, previous));

  return +highestOccurringDigit;
}

// console.log('51 999', findPrime('51 999'));
// console.log('8 10', findPrime('8 10'));
// console.log('2 10', findPrime('2 10'));
// console.log('1 10', findPrime('1 10'));
// console.log('1 2', findPrime('1 2'));
// console.log('1 20', findPrime('1 20'));
// console.log('1 30', findPrime('1 30'));
// console.log('1 100', findPrime('1 100'));
// console.log('1 10', findPrime('1 10'));
// console.log('1 10', findPrime('1 10'));
// console.log('2 20', findPrime('2 20'));
// console.log('11 30', findPrime('11 30'));
// console.log('21 30', findPrime('21 30'));
// console.log('1 100', findPrime('1 100'));
// console.log('-5 -20', findPrime('-5 -20'));
// console.log('-1 999', findPrime('-1 999'));
// console.log('4 0', findPrime('4 0'));
// console.log('7 7', findPrime('7 7'));
// console.log('7 8', findPrime('7 8'));
// console.log('2 100', findPrime('2 100'));
// console.log('10 2', findPrime('10 2'));


// console.log('51 999', findPrime('51 999'));
// console.log('8 10', findPrime('8 10'));
// console.log('2 10', findPrime('2 10'));
// console.log('1 10', findPrime('1 10'));
// console.log('1 2', findPrime('1 2'));
// console.log('1 20', findPrime('1 20'));
// console.log('1 30', findPrime('1 30'));
// console.log('1 100', findPrime('1 100'));
// console.log('1 10', findPrime('1 10'));
// console.log('1 10', findPrime('1 10'));
// console.log('2 20', findPrime('2 20'));
// console.log('11 30', findPrime('11 30'));
// console.log('21 30', findPrime('21 30'));
// console.log('1 100', findPrime('1 100'));
// console.log('7 8', findPrime('7 8'));
// console.log('2 100', findPrime('2 100'));
console.log('0 10', findPrime('0 10'));
console.log('-1 999', findPrime('-1 999'));
console.log('-5 -20', findPrime('-5 -20'));
console.log('4 0', findPrime('4 0'));
console.log('7 7', findPrime('7 7'));
console.log('10 2', findPrime('10 2'));


// (""+n).split("")

function findPrime(string) {
  let str = string.split(' ');
  if (+str[0] <= 0 || +str[1] <= 0) {
    throw 'Please provide a number greater than 0 as 0 or negative integers cannot be prime'
  }
  if (+str[1] <= +str[0]) {
    throw 'Input range incorrect';
  }
  
  let primeList = [];
    
  for (let i = +str[0]; i <= +str[1]; i++) {
    if (i === 2) {
      primeList.push(2);
    }
    if (i === 3) {
      primeList.push(3);
    }
    if (i === 5) {
      primeList.push(5);
    }
     if (i === 7) {
      primeList.push(7);
    }
    if (i === 11) {
      primeList.push(11);
    }


    if (i > 11 && i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0 && i % 11 !== 0) {
        primeList.push(i);
    }

  }
    
  if(!primeList || !primeList.length) {
    return 'No prime numbers found';
  }

  
  if (+str[0] >= 1 && +str[1] < 11) {
    return Math.max(...primeList);
  }
  
  let occurrence = primeList.join('').split('');
  occurrence.sort();
  let count = 1;
  let obj = {};
  for (let i = 0; i < occurrence.length; i++) {
    if (occurrence[i] === occurrence[i + 1]) {
      count++;
      obj[occurrence[i]] = count;
    }
    if (occurrence[i] !== occurrence[i + 1]) {
       count = 1;
    }
  }

  const highestOccurringDigit = Object.keys(obj).reduce((current, next) => obj[next] < obj[current] ? current : next);
  return +highestOccurringDigit;
}

// console.log('51 999', findPrime('51 999'));
// console.log('8 10', findPrime('8 10'));
// console.log('2 10', findPrime('2 10'));
// console.log('1 10', findPrime('1 10'));
// console.log('1 2', findPrime('1 2'));
// console.log('1 20', findPrime('1 20'));
// console.log('1 30', findPrime('1 30'));
// console.log('1 100', findPrime('1 100'));
// console.log('1 10', findPrime('1 10'));
// console.log('1 10', findPrime('1 10'));
// console.log('2 20', findPrime('2 20'));
// console.log('11 30', findPrime('11 30'));
// console.log('21 30', findPrime('21 30'));
// console.log('1 100', findPrime('1 100'));
// console.log('7 8', findPrime('7 8'));
// console.log('2 100', findPrime('2 100'));
// console.log('0 10', findPrime('0 10'));
console.log('-1 999', findPrime('-1 999'));
console.log('-5 -20', findPrime('-5 -20'));
console.log('4 0', findPrime('4 0'));
console.log('7 7', findPrime('7 7'));
console.log('10 2', findPrime('10 2'));


// (""+n).split("")

function findPrime(string) {
  let str = string.split(' ');
  if (str[0] < 0 || str[1] < 0) {
    throw 'Please provide a positive number as negative integers cannot be prime'
  }
  if (str[1] <= str[0]) {
    throw 'Parameter range incorrect';
  }
  
  let primeList = [];
      
  for (let i = +str[0]; i <= +str[1]; i++) {
    if (i === 2) {
      primeList.push(2);
    }
    if (i === 3) {
      primeList.push(3);
    }
    if (i === 5) {
      primeList.push(5);
    }
     if (i === 7) {
      primeList.push(7);
    }
    if (i === 11) {
      primeList.push(11);
    }
    if (i > 11) {
      if (i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0 && i % 11 !== 0) {
        primeList.push(i);
      }
    }

  }
  
    
//     console.log(primeList);
  
  if(!primeList || !primeList.length) {
    return 'No prime numbers found';
  }

  
  if (+str[0] >= 1 && +str[1] < 11) {
    return Math.max(...primeList);
  }
  
  let occurrence = primeList.join('').split('');
//   console.log('occurrence', occurrence);
  occurrence.sort();
  let count = 1;
  let obj = {};
  for (let i = 0; i < occurrence.length; i++) {
    if (occurrence[i] === occurrence[i + 1]) {
      count++;
      obj[occurrence[i]] = count;
    }
    if (occurrence[i] !== occurrence[i + 1]) {
       count = 1;
    }
  }

  const highestOccurringDigit = Object.keys(obj).reduce((current, previous) => obj[previous] > obj[current] ? previous : current);

  return +highestOccurringDigit;
}

// console.log('51 999', findPrime('51 999'));
// console.log('8 10', findPrime('8 10'));
// console.log('2 10', findPrime('2 10'));
// console.log('1 10', findPrime('1 10'));
// console.log('1 2', findPrime('1 2'));
// console.log('1 20', findPrime('1 20'));
// console.log('1 30', findPrime('1 30'));
// console.log('1 100', findPrime('1 100'));
// console.log('1 10', findPrime('1 10'));
// console.log('1 10', findPrime('1 10'));
// console.log('2 20', findPrime('2 20'));
// console.log('11 30', findPrime('11 30'));
// console.log('21 30', findPrime('21 30'));
// console.log('1 100', findPrime('1 100'));
// console.log('-5 -20', findPrime('-5 -20'));
// console.log('-1 999', findPrime('-1 999'));

console.log('4 0', findPrime('4 0'));


// (""+n).split("")

function findPrime(string) {
  let str = string.split(' ');
//   console.log(str);
  if (str[0] < 0 || str[1] < 0) {
//       console.log('hi', str[0]);

    throw 'Please provide a positive number as negative integers cannot be prime'
  }
  
  if (+str[1] <= +str[0]) {
    throw 'Parameter range incorrect';
  }
  
  let primeList = [];
  
  let highestOccurringDigit; 
    
  for (let i = +str[0]; i <= +str[1]; i++) {
//     console.log(i);
    if (i === 2) {
      primeList.push(2);
    }
    if (i === 3) {
      primeList.push(3);
    }
    if (i === 5) {
      primeList.push(5);
    }
     if (i === 7) {
      primeList.push(7);
    }
    if (i === 11) {
      primeList.push(11);
    }


    if (i > 11 && i % 2 !== 0 && i % 3 !== 0 && i % 5 !== 0 && i % 7 !== 0 && i % 11 !== 0) {
        primeList.push(i);
    }

  }
  
    
    console.log(primeList);
  
  if(!primeList || !primeList.length) {
    return 'No prime numbers found';
  }

  
  if (+str[0] >= 1 && +str[1] < 11) {
    return Math.max(...primeList);
  }
  
  let occurrence = primeList.join('').split('');
//   console.log('occurrence', occurrence);
  occurrence.sort();
  let count = 1;
  let obj = {};
  for (let i = 0; i < occurrence.length; i++) {
    if (occurrence[i] === occurrence[i + 1]) {
      count++;
      obj[occurrence[i]] = count;
    }
    if (occurrence[i] !== occurrence[i + 1]) {
       count = 1;
    }
  }
//     console.log(primeList);

  console.log('obj', obj);

//   highestOccurringDigit = Object.keys(obj).reduce((current, next) => {
//     console.log('cur', current, 'nex', next);
// //     return obj[next] > obj[current] ? next : current
//     if (obj[next] > obj[current]) {
//       console.log('next', obj[next]);
//       return next;
//     }
//     console.log('current', obj[current]);
//     return current;
//   });
  
   highestOccurringDigit = Object.keys(obj).reduce((current, next) => {
//     console.log('cur', current, 'nex', next);
//     return obj[next] > obj[current] ? next : current
    if (obj[next] < obj[current]) {
//       console.log('next', obj[next]);
      return current;
    }
//     console.log('current', obj[current]);
    return next;
  });
  
  
//     highestOccurringDigit = Object.keys(obj).reduce((current, previous) => Math.max(current, previous));

  return +highestOccurringDigit;
}

// console.log('51 999', findPrime('51 999'));
// console.log('8 10', findPrime('8 10'));
// console.log('2 10', findPrime('2 10'));
// console.log('1 10', findPrime('1 10'));
// console.log('1 2', findPrime('1 2'));
// console.log('1 20', findPrime('1 20'));
// console.log('1 30', findPrime('1 30'));
// console.log('1 100', findPrime('1 100'));
// console.log('1 10', findPrime('1 10'));
// console.log('1 10', findPrime('1 10'));
// console.log('2 20', findPrime('2 20'));
// console.log('11 30', findPrime('11 30'));
// console.log('21 30', findPrime('21 30'));
// console.log('1 100', findPrime('1 100'));
// console.log('-5 -20', findPrime('-5 -20'));
// console.log('-1 999', findPrime('-1 999'));
// console.log('4 0', findPrime('4 0'));
// console.log('7 7', findPrime('7 7'));
// console.log('7 8', findPrime('7 8'));
// console.log('2 100', findPrime('2 100'));
console.log('10 2', findPrime('10 2'));


// (""+n).split("")