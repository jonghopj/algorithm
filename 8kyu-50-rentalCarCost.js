function rentalCarCost(days) {
   if (days < 3) return days * 40;
   if (dyas >= 3 && days < 7) return days * 40 - 20;
   if (days >= 7) return days * 40 - 50;
}

console.log(rentalCarCost(1));

function rentalCarCost(days) {
   if (days >= 7) return days * 40 - 50;
   else if (days >= 3 ) return days * 40 - 20;
   else return days * 40;

   
}
console.log(rentalCarCost(6));

 function rentalCarCost(days) {

   return days * 40 - (days >= 7 ? 50 : days >= 3 ? 20 : 0);
 }


 console.log(rentalCarCost(8));

function rentalCarCost(days) {
   const dayCost = 40;
   let discount = 0;

    if (days >= 3) discount += 20;
    if (days >= 7) discount += 30;

     return days * dayCost - discount;
}

 console.log(rentalCarCost(9));

