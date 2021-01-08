// There are some stones on Bob's table in a row, and each of them can be red, green or blue, indicated by the characters R, G, 
// and B.

// Help Bob find the minimum number of stones he needs to remove from the table so that the stones in each pair of adjacent
// stones have different colours.

function solve(stones) {
  stones = stones.split('');
  let arr = 0;
  for (let i = 0; i < stones.length; i++) {
    if (stones[i] === stones[i + 1]) {
      arr += 1;
    }
  }
  return arr;
}

console.log(solve("RRGGBB"));
console.log(solve("RGBRGBRGGB"));
console.log(solve("RGGRGBBRGRR"));
console.log(solve("RRRRGGGGBBBB"));