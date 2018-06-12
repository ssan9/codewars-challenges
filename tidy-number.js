// Definition
// A Tidy number is a number whose digits are in non-decreasing order.

// Task
// Given a number, Find if it is Tidy or not .

// describe("Basic tests",_=>{
//   Test.assertEquals(tidyNumber(12),true);
//   Test.assertEquals(tidyNumber(102),false);
//   Test.assertEquals(tidyNumber(9672),false);
//   Test.assertEquals(tidyNumber(2789),true);
//   Test.assertEquals(tidyNumber(2335),true);
// });

function tidyNumber(n){
  let num = n.toString().split('');
  for(let i = 0; i<num.length; i++) {
    if(num[i]>num[i + 1]) {
      return false;
    }
  }
  return true;
}