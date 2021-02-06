// Solution1

function maps(arr) {
let result = [];

 for (let i = 0; i < arr.length; i++) {
   result.push(arr[i] * 2);
 }
return result;
}

console.log(maps([1, 2, 3, 4]));




// Solution 2 

 function maps(arr) {
    return arr.map(i => i * 2);
 }

  console.log(maps([1, 2, 3, 4]));