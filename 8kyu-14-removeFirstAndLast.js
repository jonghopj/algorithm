// function removeFirstAndLast(str) {
//   let result = '';

//   for (let i = 1; i < str.length - 1; i++) {
//     result += str[i];
//   }
//   return result;
// }
// solution 2
// console.log(removeFirstAndLast('Codewars'));
// console.log(removeFirstAndLast('World'));

// function removeFirstAndLast(str) {
//   let arr = str.split('');

//   arr.shift();
//   arr.pop();

//   return arr.join('')

// }
// console.log(removeFirstAndLast('Hello'));
// // console.log(removeFirstAndLast('Parkjongho'));

// solution3

// function removeFirstAndLast(str) {
//   return str.slice(1, -1);
// }

// console.log(removeFirstAndLast('World'));

// function removeFirstAndLast(str) {
//   return str.split('').splice(1, str.length - 2).join('');
// }
// console.log(removeFirstAndLast('World'));
// console.log(removeFirstAndLast('Parkjongho'));


function removeFirstAndLast(str) {
   return str.replace(/^.|.$/g, '');

}

console.log(removeFirstAndLast('World'));