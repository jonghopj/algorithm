// solutin1

function sortAndStar(arr) {
  let firstElement = arr.sort()[0];
  let result = firstElement[0];

   for (let i = 1; i < firstElement.length; i++) {
     result += '***' + firstElement[i];
   }
   return result;
}

console.log(sortAndStar(['c', 'bb', 'aaa']));

// solution2 

function sortAndStar(arr) {
  return arr.sort()[0].split('').join('***');
}
console.log(sortAndStar(['c', 'bb', 'aaa']));

// solution3

function sortAndStar(arr) {
  return arr.sort()[0].replace(/(.)(?!$)/g, i => i + '***');

  
}
console.log(sortAndStar(['c', 'bb', 'aaa']));
