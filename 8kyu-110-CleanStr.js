function cleanStr(str) {
  let result = '';

   for (let i = 0; i < str.length; i++) {
     if (isNaN(str[i]) || str[i] === ' ') {
       result += str[i];
     }
   }
   return result;
}

 console.log(cleanStr('ab12'));

//  solution2


function cleanStr(str) {
   return str.replace(/\d/g,'');
}

console.log(cleanStr(''));


// solution3


function cleanStr(str) {
  return str.split(/\d/).join('');
}

console.log(cleanStr('a a'));