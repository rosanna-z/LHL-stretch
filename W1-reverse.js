// reversing a string from command line
const reverse = function(string) {
  let newString = "";
  for (let x = string.length-1; x >= 0; x--) {
    newString += string[x]
  }
  return newString;
}

// takes arguments starting on index 2
for (let i = 2; i < process.argv.length; i++) {
  const string = process.argv[i];
  console.log(reverse(string));
}
