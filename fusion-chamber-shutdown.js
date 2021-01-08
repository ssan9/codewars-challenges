// 7kyu - Fusion Chamber Shutdown 

// A laboratory is testing how atoms react in ionic state during nuclear fusion. They introduce different elements with Hydrogen in high temperature and pressurized chamber. Due to unknown reason the chamber lost its power and the elements in it started precipitating
// Given the number of atoms of Carbon [C],Hydrogen[H] and Oxygen[O] in the chamber. Calculate how many molecules of Water [H2O], Carbon Dioxide [CO2] and Methane [CH4] will be produced following the order of reaction affinity below

// 1. Hydrogen reacts with Oxygen   = H2O
// 2. Carbon   reacts with Oxygen   = CO2
// 3. Carbon   reacts with Hydrogen = CH4
// FOR EXAMPLE:
// (C,H,O) = (45,11,100)
// return no. of water, carbon dioxide and methane molecules
// Output should be like:
// (5,45,0)

function burner(c, h, o) {
  let water = Math.floor(Math.min(h/2,o));
  o = o - water
  h = h - water * 2
  let co2 = Math.floor(Math.min(c,o/2));
  let methane = Math.floor(Math.min(c,h/4));
  return [water, co2, methane];
}

console.log(burner(45, 11, 100));
console.log(burner(354, 1023230, 0));
console.log(burner(939, 3, 694));
console.log(burner(215, 41, 82100));
console.log(burner(113, 0, 52));


// function burner(c, h, o) {
//   const water = Math.min(Math.floor(h/2),o);
//   const co2 = Math.min(Math.floor((o - water)/2),c);
//   const methane = Math.min(Math.floor((h - water * 2)/4),c-co2)
//   return [water, co2, methane];
// }


// const burner = function(carbon, hydrogen, oxygen) {
  
//   const H2O = Math.min(oxygen, parseInt(hydrogen / 2))
//   const CO2 = Math.min(carbon, parseInt((oxygen - H2O) / 2))
//   const CH4 = Math.min(carbon - CO2, parseInt((hydrogen - H2O * 2) / 4))

//   return [ H2O, CO2, CH4 ]
// }

// function burner(c, h, o) {
//     const water = Math.min(~~(h / 2), o)
//     const carbon = Math.min(~~((o - water) / 2), c)
//     const methane = Math.min(~~((h - water * 2) / 4), c - carbon)
//     return [water, carbon, methane]
// }