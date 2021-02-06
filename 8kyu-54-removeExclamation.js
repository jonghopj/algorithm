function removeExclamation(str) {
  let result = '';

   for (let i = 0; i < str.length; i++) {
     if (str[i] !== '!') {
        result += str[i];
     } 
   }
   return result;
}

console.log(removeExclamation('abcd!'));
console.log(removeExclamation('ab!!cd'));


// solution2


function removeExclamation(str) {
  let result = [];

   for (let i = 0; i < str.length; i++) {
     if (str[i] !== '!') {
        result.push(str[i]);
     }
   }

    return result.join('');
}

 console.log(removeExclamation('abcd!'));


//  solution3


 function removeExclamation(str) {
    return str.split('!').join('');
 }

 console.log(removeExclamation('a!b!cd'));

// solution 4
function removeExclamation(str) {
   return str.split('').filter(i => i !== '!');


    
}

 console.log(removeExclamation('abcd!!!!!!'));


// solution5

 function removeExclamation(str) {
    return str.replace(/!/g,'');
 }

  console.log(removeExclamation('ab!!cd'));