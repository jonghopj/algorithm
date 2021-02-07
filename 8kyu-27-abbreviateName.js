// solution1

// function abbreviateName(name) {
//   let arr = name.split(' ');
//   let result = [];

//   for (let i = 0; i < arr.length; i++)
//   result.push(arr[i][0].toUpperCase());
// }
// return result.join(' ');

// console.log(abbreviateName('Sam Jonggo'));  xxxxxxxx



// solution2

// function abbreviateName(name) {
//   let arr = name.split(' ');

//   return (arr [0][0] + '.' + arr[1][2]).upUpperCase();
// }

// console.log(abbreviateName('Jongho Park')); xxxxxxxxxxxxxxxxxxxx


// solution3

function abbreviateName(name) {
  let arr = name.toUpperCase().split(' ');

  return arr[0][4] + ' .' + arr [1][1];
}

console.log(abbreviateName('jongho park'));