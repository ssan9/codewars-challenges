Strong number is the number that the sum of the factorial of its digits is equal to number itself.

For example : 145 , since
1! + 4! + 5! = 1 + 24 + 120 = 145

So, 145 is a Strong number.

Task
Given a number, Find if it is Strong or not .

function strong(n) {
  l = [];
  m = n.toString();

  for(let i = 0; i < m.length; i++) {
    l.push(+m.charAt(i));
  }
  let b =[];
    for(j = 0; j < l.length; j++){        
        let f = 1;
        for(let i = 1; i<=l[j]; i++) {
          f*= i;
        }
          b.push(f);
    }  
  let sum = 0;
  for(let k = 0; k < b.length; k++) {
    sum += b[k];
  }
   return sum === n ? "STRONG!!!!" : "Not Strong !!";
}

//or

function strong(n) {
 
   let fact = [0, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880]

   return n == n
                .toString()
                .split('')
                .map(Number)
                .reduce((a,c) => a + fact[c],0)?'STRONG!!!!':'Not Strong !!'

}

function strong(n) {
  var sum = String(n).split('').map(function (item) {
    var fact = 1;
    for (var i = 1; i <= item; i++) {
      fact = fact * i;
    }
    return fact;
  }).reduce(function(sum, item) {
    return sum + item;
  })
  return (sum === n) ? "STRONG!!!!" : "Not Strong !!";
}

