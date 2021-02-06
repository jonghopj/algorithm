function removeLastExclamation(str) {
  let result = '';


   if (str[str.length - 1] === '!') {
     for (let i = 0; i < str.length - 1; i++){
       result += str[i];
     }
     return result;
   } else {
     return str;
   }
}


 console.log(removeLastExclamation('abc!'));


  // solution2

   function removeLastExclamation(str) {
     if (str[str.length - 1] === '!') {
        return str.slice(0, -1);
     } else {
       return str;
     }
   }


   console.log(removeLastExclamation('abc!'));

    // solution3

    function removeLastExclamation(str) {
       return str[str.length - 1] === '1' ? str.slice(0, -1) : str;
    }

    console.log(removeLastExclamation('!abc'));

    // solution4


     function removeLastExclamation(str) {
        return str.replace(/!$/g, '');
     }

      console.log(removeLastExclamation('!!!!'));
