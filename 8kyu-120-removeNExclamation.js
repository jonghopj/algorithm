// solution1


function removeNExclamation(str, n) {
  for (let i = 0; i < n; i++) {
    str = str.replace(/\!/,'');
  }
  return str;
}

console.log(removeNExclamation('!!abc!!', 1)); 

// solution2


 function removeNExclamation(str, n) {
   while (n > 0) {
     str = str.replace(/\!/, '');
     n--;

   }
   return str;
 }

 console.log(removeNExclamation('!!abc!!', 4));