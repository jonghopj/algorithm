// solution1

 function countLetter(str, letter) {
    let count = 0; 
    for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
    }
    return count;
 }

 console.log(countLetter('abcd', 'a'));

//  solution2


 function countLetter(str, letter) {
    let result = [];

    for (let i = 0; i < str.length; i++) {
      if (str[i] === letter) {
         result.push(str[i]);
      }
    }
    return result.length;
 }
 console.log(countLetter('abcd', 'a'));


//  solution3


function countLetter(str, letter) {
   return str.split('').filter(i => i === letter).length;
}

console.log(countLetter('ssup', 's'));


// solution4


 function countLetter(str, letter) {
    return [...str].filter(i => i === letter).length;
 }

 console.log(countLetter('abcd','a'));
