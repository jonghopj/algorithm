function removeEveryOther(arr) {
  let result = [];

   for (let i = 0; i < arr.length; i += 2) {
      result.push(arr[i]);
   }

    return result;
}

console.log(removeEveryOther([1, 2, 3, 4]));



function removeEveryOther(arr) {
  for  (let i = 1; i < arr.length; i++) {
    arr.splice(i,1);
  }

   return arr;
}

console.log(removeEveryOther([1, 2, 3, 4]));



function removeEveryOther(arr) {
   return arr.filter((i, index) => index % 2 === 0);
}

console.log(removeEveryOther([1, 2, 3, 4]));


function removeEveryOther(arr) {
  return arr.filter((_, index) => index % 2 === 0);


}

console.log(removeEveryOther([1, 2, 3, 4]));