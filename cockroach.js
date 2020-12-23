// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded
// down to the integer (= floored).

function cockroachSpeed(s) {
  //Good Luck!
  return Math.floor(s/60 * 100000/60);
}

console.log(cockroachSpeed(1.08));
console.log(cockroachSpeed(1.09));
console.log(cockroachSpeed(0));

