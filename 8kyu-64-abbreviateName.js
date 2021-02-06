
// solution 1     this is not working.
// Write a function to convert a name into initials.



// function abbreviateName(name) {
//   let arr = name.split(' ');
//   let firsName = arr[0];
//   let lastName = arr[1];

// return `${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}`;
// }


// console.log(abbreviateName('Sam Azor'));

// solution2

//  function abbreviateName(name) {
//     let arr = name.split(' ');
//     let firstInit = arr[0][0];
//     let lastInit = [1][0];

//     return `${firstInit.toUpperCase()}.${lastInit.toUpperCase()}`;
//  }

//  console.log(abbreviateName('Sam Azor'));

// solution3


function abbreviateName(name) {
   return name.split(' ').map(i => i[0].toUpperCase()).join('.');
}

console.log(abbreviateName('Sam Azor'));

// solution4


 function abbreviateName(name) {
   return name.match(/\b\w/g).join('.').toUpperCase();
 }

 console.log(abbreviateName('Sam Azor'));