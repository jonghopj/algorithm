function isDivisiblePixel(wallLength, pixelSize) {
  if (wallLength % pixelSize === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isDivisiblePixel(1000, 1));
// solution2


function isDivisiblePixel(wallLength, pixelSize) {
   return wallLength % pixelSize === 0 ? true : false;
}

console.log(isDivisiblePixel(1000,4));


// solution3


 function isDivisiblePixel(wallLength, pixelSize) {
    return wallLength % pixelSize === 0;
 }

 console.log(isDivisiblePixel(1000,2));


//  solution4

function isDivisiblePixel(wallLength, pixelSize) {
   return !(wallLength % pixelSize);
}

console.log(isDivisiblePixel(1000, 1));