// solution1


 function lovePetals(flower1, flower2) {
    if (flower1 % 2 === 0 && flower2 % 2 === 1 || flower1 % 2 === 1 && flower2 % 2 === 0) {
       return true;
    } else {
      return false;
    }
 }
 console.log(lovePetals(1, 4));
 


//  solution2

function lovePetals(flower1, flower2) {
   let even_f1 = flower1 % 2 === 0;
   let even_f2 = flower2 % 2 === 0;
   let odd_f1 = flower1 % 2 === 1;
   let odd_f2 = flower2 % 2 === 1;

    if (even_f1 && odd_f2 || odd_f1 && even_f2) {
       return true;
          }
          else {
            return false;
          }
}

 console.log(lovePetals(1, 4));


//  solution3

function lovePetals(flower1, flower2) {
   return (flower1 + flower2) % 2 === 1;
}

 console.log(lovePetals(1, 4));


 solution4

 function lovePetals(flower1, flower2) {
    return flower1 % 2 !== flower2 % 2 % 2;
 }

  console.log(lovePetals(2, 4));

//  solution5


 function lovePetals(flower1, flower2) {
    let f1 = flower1 % 2;
    let f2 = flower2 % 2;

     return f1 !== f2;
 }

  console.log(lovePetals(2, 4));