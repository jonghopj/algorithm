function isIsogram(str) {
  str = str.toLowerCase();

  for (let i = 0; i < str.length - 1; i++) {
   for(let j = i + 1; j < str.length; j++) {
     if (str[i] === str[j]) {
       return false;
     }
   }
  }
  return true;
}

// console.log(isIsogram('abc'));

// solution2

function isIsogram(str) {
  
  const arr= str.toLowerCase().split('').sort();
  
  
  for(let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      return false;
    }
  }
 return false;
  }

  console.log(isIsogram('abc'));

  // solution3

  function isIsogram(str) {
    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
      if (str.indexOf(str.charAt(i), i + 1) !== -1) {
        return false;
      }
    }

    return true;
  }

  // console.log(isIsogram('abc'));

  // solution4

  function isIsogram(str) {
    return !str.match(/([a-z]).*\1/i);
  }

  console.log(isIsogram('Codewars'));