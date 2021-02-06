function fixTheMeerkat(arr) {
   return [arr[2], arr[1], arr[0]];
}

 console.log(fixTheMeerkat(['tail', 'body', 'head']));


//  solution 2

 function fixTheMeerkat(arr) {
   let result = [];

    for (let i = arr.length - 1; i >= 0; i--) {
      result.push(arr[i]);
    }
    return result;
 }

 console.log(fixTheMeerkat(['tail', 'body', 'head']));

//  solution3

function fixTheMeerkat(arr) {
  return arr.reverse();
}

console.log(fixTheMeerkat(['tail', 'body', 'head']));