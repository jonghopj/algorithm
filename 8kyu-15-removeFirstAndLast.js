
// solution1

function removeFirstAndLast(str) {
  let result = '';

  for (let i = 1; i < str.length - 1; i ++) {
    result += str[i];
  }
  return result;
}

// console.log(removeFirstAndLast('Hello world'));


// solution2


function removeFirstAndLast(str) {
  let arr = str.split('');

  arr.shift();
  arr.pop();

  return arr.join('');
}

// console.log(removeFirstAndLast('Hello workdl'));


// solution3


function removeFirstAndLast(str) {
  return str.substring(1,  str.length - 1);
}

// console.log(removeFirstAndLast('hello'));

// solution4

function removeFirstAndLast(str) {
  return str.slice(1, -1);

}

// console.log(removeFirstAndLast('hello'));

// solution5

function removeFirstAndLast(str) {
  return str.split('').splice(1, str.length - 2).join('');
}

// console.log(removeFirstAndLast('hello'));

// solution6

function removeFirstAndLast(str) {
  return str.replace(/^.|.$/g,'');
}

console.log(removeFirstAndLast('hello'));