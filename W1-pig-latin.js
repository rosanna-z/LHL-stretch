// converts arguments from commandline to pig latin
const pigLatin = function(string) {
  let pigLatin = "";
  pigLatin = string.substring(1)  + "ay"
  return pigLatin;
}

// takes arguments starting on index 2
for (let x = 2; x < process.argv.length; x++) {
  const string = process.argv[x]
  console.log(pigLatin(string));
}
