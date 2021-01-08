// You have to create a function calcType, which receives 3 arguments: 2 numbers, and the result of an unknown operation
// performed on them (also a number).

// Based on those 3 values you have to return a string, that describes which operation was used to get the given result.

// The possible return strings are: "addition", "subtraction", "multiplication", "division".

// calcType(1, 2, 3) -->   1 ? 2 = 3   --> "addition"

function calcType(a, b, res) {
  if (a + b === res) {
    return 'addition';
  }
  if (a - b === res) {
    return 'subtraction';
  }
  if (a / b === res) {
    return 'division';
  }
  if (a * b === res) {
    return 'multiplication';
  }
}

// refactored

function calcType(a, b, res) {
  let result;
  a + b === res ? result = 'addition' : a - b === res ? result = 'subtraction' : a / b === res ? result = 'division' : result = 'multiplication';
  return result;
}

// function calcType(a,b,res)  {
//   return a+b==res ? "addition" : a-b==res ? "subtraction" : a*b==res ? "multiplication" : "division"
// }

// function calcType(a, b, res) {
//   switch (res) {
//     case a + b:
//       return 'addition';
//       break;
//     case a - b:
//       return 'subtraction';
//       break;
//     case a / b:
//       return 'division';
//       break;
//     case a * b:
//       return 'multiplication';
//   }
// }


console.log(calcType(1, 2, 3));
console.log(calcType(10,4,40));
console.log(calcType(10,5,5));
console.log(calcType(9,5,1.8));
