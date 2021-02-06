function powersOfTwo(n) {
   let result = [];



       for (let i = 0; i <= n; i++) {
         result.push(Math.pow(2, i));
       }
       return result;
}

 console.log(powersOfTwo(8));

//  solution2


 function powersOfTwo(n) {
   let result = [];

    for (let i = 0; i <= n; i++) {
       result.push (2 ** i);

       
    }
return result;
 }


  console.log(powersOfTwo(2));