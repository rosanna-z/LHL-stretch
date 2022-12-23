/* Function that takes in three parameters and prints accordingly
*/

const loopyLighthouse = function (range, multiples, words) {
  for (let x = range[0]; x < range[1] + 1; x++) {
    if (x % multiples[0] === 0 && x % multiples[1] === 0) {
      console.log(words[0] + words[1]);
    } else if (x % multiples[0] === 0) {
      console.log(words[0]);
    } else if (x % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(x);
    }
  }
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
