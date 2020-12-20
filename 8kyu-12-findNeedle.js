// function findNeedle(haystakc) {
//   for (let i = 0; i < haystakc.length; i++) {
//     if (haystakc[i] === 'needle') {
//       return 'found the needle at position ' + i;
//     }
//   }
// }

// console.log(findNeedle([1, 2, 'needle', 4]));

// solution2

// function findNeedle(haystack) {
//    return 'found the needle at position' + haystack.indexOF('needle');
// }
//  console.log(findNeedle([1, 'a piece of hay', true, 4, 'needle', undefined]));

// solution3

// function findNeedle(haystack) {
//    return "found the needle at position ${haystack.indexOF( 'needle')}";
// }
function findNeedle(haystack) {
  return "found the needle at position ${haystack.indexOf('needle')}";
}
console.log(findNeedle(1, 2, 'needle', 4));