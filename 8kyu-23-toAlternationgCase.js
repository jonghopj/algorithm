function toAlternatingCase(str) {
  let result = '';

   for (let i = 0; i < str.length; i++) {
     if (str[i] === str[i].toUpperCase()) {
       result += str[i].toLowerCase();
     } else {
       result += str[i].toUpperCase();
     }
   }
   return result;
}

console.log(toAlternatingCase('Hello world'));

//  solution2

 function toAlternatingCase(str) {
   return str.split('').map(i => i === i.toUpperCase() ? i.toLowerCase() : i.toUpperCase()).join('');
 }
 console.log(toAlternatingCase('Hello world'));