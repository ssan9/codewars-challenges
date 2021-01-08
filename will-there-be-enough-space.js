// The Story:
// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

function enough(cap, on, wait) {
  // your code here
  let space  = on + wait;
  if(cap >= space) {
    return 0;
  }
    return Math.abs(cap - space);
  }

console.log(enough(10, 5, 5));
console.log(enough(100, 60, 50));
console.log(enough(20, 5, 5));

// describe('Example Tests', function(){
//   Test.assertEquals(enough(10, 5, 5), 0);
//   Test.assertEquals(enough(100, 60, 50), 10);
//   Test.assertEquals(enough(20, 5, 5), 0);
// });