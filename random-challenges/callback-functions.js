function addNumbers(number1, number2) {
  console.log(number1 + number2);
}

function addNumbersGenerate(num) {
  var number2 = 10;
  addNumbers(number2, num);
}

addNumbersGenerate(2);