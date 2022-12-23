/* Function that prints 100 to 200 
but prints Loopy when multiples of 3, 
prints Lighthouse when multiples of 4 and 
prints LoopyLighthouse when multiples of 3 and 4
*/ 

const loopy = function() {
  for (let x = 100; x < 201; x++) {
    if (x%3 === 0 && x%4 === 0) {
      console.log("LoopyLighthouse");
    }
    else if (x%3 === 0) {
      console.log("Loopy");
    }
    else if (x%4 === 0) {
      console.log("Lighthouse");
    }
    else {
      console.log(x);
    }
  }
}

loopy();