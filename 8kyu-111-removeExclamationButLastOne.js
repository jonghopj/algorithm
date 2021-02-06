function removeExclamationButLastOne(str) {
  let result = '';

   for (let i = 0; i < str.length; i++) {
     if  (str[i] !== '!') {
       result += str[i];
     }
   }
   return result + '!';
}

 console.log(removeExclamationButLastOne('!!abc'));


//  solution2


function removeExclamationButLastOne(str) {
  return str.split('!').join('') + '!';
}

console.log(removeExclamationButLastOne('!!abc'));


// solution3


function removeExclamationButLastOne(str) {
  return str.replace(/!+/g, '') + '!';
}

console.log(removeExclamationButLastOne('a!b!c'));


// solution4


function removeExclamationButLastOne(str) {
  return `${str.replace(/!+/g, '')}`;
}
console.log(removeExclamationButLastOne('!!abc'));