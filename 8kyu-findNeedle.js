// Haystacks
// const haystack_01 = [4, '2019', undefined, 'needle'];
// const haystack_02 = ['thread', true, 'needle', 2019];
// const haystack_03 = [false, 'thread', 8688, 'code'];

// solution1

// function findNeedle(haystack) {
//   for (let i = 0; i < haystack.length; i++) {
//     if (haystack[i] === 'needle') {
//       return i;
//     }
//   }
// }

// console.log(findNeedle([4, '2019', undefined, 'needle']));

// solution2

// function findNeedle(haystack) {
//   return haystack.indexOf('needle');
// }

// console.log(findNeedle([4, '2019', undefined, 'needle']));