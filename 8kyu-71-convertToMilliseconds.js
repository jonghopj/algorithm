// function convertToMilliseconds(h, m, s) {
//   let hourseToSec = h * 60 * 60;
//   let minutesToSec = m * 60;

//    return (hoursToSec + minutesToSec + s) * 1000;
// }

function convertToMilliseconds(h, m, s) {
  let hoursToSec = h * 60 * 60;
  let minutesToSec = m * 60;
  
  return (hoursToSec + minutesToSec + s) * 1000;
}
 console.log(convertToMilliseconds(0, 0, 1));



//  solution2
  function convertToMilliseconds(h, m, s) {
let hoursToMilli = h * 60 * 60 * 1000;
let minutesToMilli = m * 60 * 1000;
let secondsToMilli = s * 1000;

return hoursToMilli + minutesToMilli + secondsToMilli;

  }

   console.log(convertToMilliseconds(1, 0, 0));


  //  solution3



   function convertToMilliseconds(h, m, s) {
     return (h * 36000 + m * 60 + s) * 1000;
   }


   console.log(convertToMilliseconds(1, 1, 1));