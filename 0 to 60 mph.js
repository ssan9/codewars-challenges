// 0 to 60 mph
// Your task is to drive your car from 1 to 60 Kilometers per hour by printing a pattern.
// A hyphen represents the speed of cars.
// one hyphen is counted as 1 kph.
// Examples
// 1 ➞ -

// 5 ➞ -----

// 3➞ ---
// Note: You have provided with an integer of numbers from 1 to 60.
// Your input should return as an string type.

function Go(num) {
	let n = "";
	for(let i = 0; i<num; i++) {
		n += '-';
	}
	return n;
}
