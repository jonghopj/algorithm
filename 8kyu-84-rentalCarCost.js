// solution1

 function rentalCarCost(days) {


  if (days >= 7) return days * 40 - 50;
  if (days >= 3 && days < 7) return days * 40 - 20;
  if (days <= 3 )return days * 40;
 }

 console.log(rentalCarCost(1));

//  solution2

function rentalCarCost(days) {
  return days * 40 - (days >= 7 ? 50 : days >= 3 ? 20 : 0);
}

console.log(rentalCarCost(10));