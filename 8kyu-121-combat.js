// solution1


 function combat(health, damage) {
    if (health - damage < 0) {
      return 0;
    } else {
       return health - damage;
    }
 }

 console.log(combat(100, 5));

//  solution2


 function combat(health, damage) {
    if (health < damage) {
      return 0;
    } else {
      return health - damage;
    }
 }

 console.log(combat(200,201));

//  solution3


 function combat(health, damage) {
   return health < damage ? 0 : health - damage;

 }

 console.log(combat(100, 5));