// write function stringy that takes a size and returns a string of alternation 1 and 0.

// the string should start with a 1

//  solution 1


 function stringy(size) {

   let result = '';

    for (let i = 1; i <= size; i++) {
      if (i % 2 === '0') {
      result += '0';
        } else {
        result += '1';
      }
    }
      return result;
    }

    console.log(stringy(1));

//  solution2

 function stringy(size) {
   let result = '';
   for (let i = 1; i <= size; i++) {
     result += i % 2;
   }

    return result;
 }


  console.log(stringy(4));

//  solution 3


 function stringy(size) {


   let result = '1';

    for (let i = 0; i < size - 1; i++) {
       result += 1 % 2;
    }

     return result;
 }


  console.log(stringy(3));