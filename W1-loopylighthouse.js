/* Function that takes in three parameters and prints accordingly */

// ORIGINAL LOGIC
// const loopyLighthouse = function (range, multiples, words) {
//   for (let x = range[0]; x < range[1] + 1; x++) {
//     if (x % multiples[0] === 0 && x % multiples[1] === 0) {
//       console.log(words[0] + words[1]);
//     } else if (x % multiples[0] === 0) {
//       console.log(words[0]);
//     } else if (x % multiples[1] === 0) {
//       console.log(words[1]);
//     } else {
//       console.log(x);
//     }
//   }
// };

// AFTER REFACTOR

const loopyLighthouse = function (range, multiples, words) {
  for (let x = range[0]; x < range[1] + 1; x++) {
    let output = "";
    output += checkMultiples(x, multiples[0], words[0])
    output += checkMultiples(x, multiples[1], words[1])
    console.log(output == "" ? x : output);
    }
  
  }

const checkMultiples = function(x, multiple, word) {
  if (x%multiple === 0) {
    return word;
  }
  else {
    return "";
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
