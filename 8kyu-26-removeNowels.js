// function removeVoWels(str) {
//   const Vowels = 'aeiou';
//   let result = '';

//   for (let i = 0; i < str.length; i++) {
//     if (Vowels.indexOf(str[i]) === -1)  {
//       result += str[i];
//     }
//   }

//   return result;
// }

// console.log(removeVoWels('AEIOU'));

// 2

// function removeVoWels(str) {
//   const vowels = 'aeiou';

//   return str.split('').filter(i => {
//     return vowels.indexOf(i) === -1;

//   }).join('');
// }

// console.log(removeVoWels('Hello world'));

// 3


function removeVoWels(str) {
   return str.replace(/[aeiou]/g, '');
}

 console.log(removeVoWels('Hello world'));