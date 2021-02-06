// solution1

 function zeroFuel(distanceToPump, milesPerGallon, fuelLeft) {
   if (milesPerGallon * fuelLeft >= distanceToPump) {
     return true;
   }else {
     return false;
   }
 }

 console.log(zeroFuel(50, 25, 2));

//  solution2

function zeroFuel(distanceToPump, milesPerGallon, fuelLeft) {
  return fuelLeft >= distanceToPump / milesPerGallon;
}

console.log(zeroFuel(50, 25, 2));