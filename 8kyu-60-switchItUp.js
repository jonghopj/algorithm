


// when provided with a number between 0-9, return it in words.


function switchUp(n) {
  if (n === 0) return 'Zero';
  if (n === 1) return 'One';
  if (n === 2) return 'Two';
  if (n === 3) return 'Three';
  if (n === 4) return 'Four';
  if (n === 5) return 'Five';
  if (n === 6) return 'Six';
  if (n === 7) return 'Seven';
  if (n === 8) return 'Eight';
}

console.log(switchUp(7));

//  solution2

function switchUp(n) {
  return [
    
    'Zero',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine'

  ][n];
}

console.log(switchUp(9));

//  solution4

function switchUp(n) {
  switch (n) {
    case 0: return 'Zero';
    case 1: return 'One';
    case 2: return 'Two';
    case 3: return 'Three';
    case 4: return 'Four';
    case 5: return 'Five';
    case 6: return 'Six';
    case 7: return 'Seven';
    case 8: return 'Eight';
    default: 'Enter a number between 0 and 9';
  }
}

console.log(switchUp(6));