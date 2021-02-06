function reverseWords(str) {
let arr = str.split(' ');
let result = [];

 for (let i = arr.length - 1; i >= 0; i--) {
   result.push(arr[i]);
 }
 return result.join(' ');
}

console.log(reverseWords('a b c'));


// solution2


 function reverseWords(str) {
   return str.split(' ').reverse().join(' ');
 }

 console.log(reverseWords('a b c'));
 
