// // solution1

// function descendingOrder(n) {
//   return Number(n.toString().split('').sort((a, b) => b - a).join(''));
// }

// console.log(descendingOrder(0));

// solution2

// function descendingOrder(n) {
//   return Number(string(n).split('').sort((a, b) => b - a).join(''));
// }
// console.log(descendingOrder(4801));

// solution3
function descendingOrder(n) {
  return +((''+ n). split('').sort((a, b) => b - a). join(''));
}

console.log(descendingOrder(1234));