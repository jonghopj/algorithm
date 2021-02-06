function capitalize(str) {
  let even = '';
  let odd = '';

   for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      even += str.toUpperCase()[i];
      odd += str[i]; 

      } else {
        even += str[i];
odd += str.toUpperCase()[i];
    } 
   }
   return [even, odd];
}

 console.log(capitalize('abcdefgh'));

// solution2\
 function capitalize(str) {
    const even = str.split('').map((i, index) => index % 2 === 0 ? i.toUpperCase() : i).join('');
 const odd = str.split('').map((i, index) => index % 2 !== 0 ? i.toUpperCase(): i).join('');
 return [even, odd];
  }

  console.log(capitalize('abcdefgh'));