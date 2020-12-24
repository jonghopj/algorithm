Write a function which repeats the givin string exactly n times


//  solution1


function repeatStr(n, str) {
  let result = '';
  
  for (let i = 0; i < n; i++) {
    result += str;
  }
  
  return result;
}
 console.log(repeatStr(1, 'askdjsd'));

// solution 2 

function repeatStr(n, str) {
  let result = '';
  while (n > 0) {
    result += str;
    n--;
  }
  return result;

}
 console.log(repeatStr(1, 'askdjsd'));


// solution 3

 function repeatStr(n, str) {
   return str.repeat(n);
 }

 console.log(repeatStr(1, 'askdjsd'));



// solution4


 function repeatStr(n, str) {
    return Array(n + 1).join(str);
 }
  console.log(repeatStr(1, 'awowowowo'));

solution5


 function repeatStr(n, str) {
    return new Array(n + 1).join(str);
 }

  console.log(repeatStr(1, 'askdjsd'));