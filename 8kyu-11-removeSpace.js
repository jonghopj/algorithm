// function removeSpace(str) {
//   let result = '';

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== ' ' ) {
//       result += str[i];
//     }
//   }

//   return result;
// }

// console.log(removeSpace( 'Hello World' ));

// solution2

// function removeSpace(str) {
//    return str.split(' ').join ('');
//   }

//    console.log(removeSpace('He llo Wo rld'));

//  solution3

//  function removeSpace(str) {
//    return str.replace(/ /g, '');

//  }

//  console.log(removeSpace('He llo Wo rld'));

//  solution4


 function removeSpace(str) {
    return str.replace(/\s/g, '');
 }

  console.log(removeSpace('hello World'));

    
