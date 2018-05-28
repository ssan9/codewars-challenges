// Find the sum of the odd numbers within an array, after cubing the initial integers. This function will return undefined (NULL in PHP) if any of the
// values aren't numbers.

//Sample tests
// Test.assertEquals(cubeOdd([1, 2, 3, 4]), 28);
// Test.assertEquals(cubeOdd([-3,-2,2,3]), 0);
// Test.assertEquals(cubeOdd(["a",12,9,"z",42]), undefined);

function cubeOdd(arr) {
  let sum = 0;
  for(let i=0; i<arr.length; i++) {
    if(arr[i]%2!=0){
      sum = sum + arr[i]*arr[i]*arr[i]
      }
    if(isNaN(arr[i])) {
      return undefined;
    }
  }
  return sum;
}