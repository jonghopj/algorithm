function xo(str) {
  let countX = 0;
  let countO = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'x' || str[i] === 'X') countX++;
    if (str[i] === 'O' || str[i] === 'O') countO++;
  }
  return countX === countO;
}

// console.log(xo('xxxo'));
// solution2
function xo(str) {
  str = str.toLowerCase();
  let countX = 0;
  let countO = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'X') countX++;
    if (str[i] === 'O') countO++;
  }
  return countX === countO;
}

// console.log(xo('xxxo'));

// solution3

function xo(str) {
  return str.toLowerCase().split('X').length === str.toLowerCase().split('O').length;
}

// console.log(xo('xxxxxo'));

// solution4

function xo(str) {
  let a = str.replace(/X/gi, '');
  let b = str.replace(/o/gi, '');

  return a.length === b.length;
}

// console.log(xo('xoxo'));

// solution5

function xo(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);

  return (x && x. length) === (o && o.length);
}

console.log(xo('xxxo'));