function switchItUp(n) {
  if (n === 0) return 'Zero'
  if (n === 1) return 'One';
  if (n === 2) return 'Two';
  if (n === 3) return 'Three';
  if (n === 4) return 'Four';
  if (n === 5) return 'Five';
  if (n === 6) return 'Six';
  if (n === 7) return 'Seven';
  if (n === 8) return 'Eight';
  if (n === 9) return 'Nine';
}

console.log(switchItUp(9));


// solution2



function switchItUp(n) {
  return ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight'][n]



}

console.log(switchItUp(6));

// solution3


function switchItUp(n){
  const data = {
  0: 'Zero',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine'

};
return data[n];
}

console.log(switchItUp(8));


// solution4



function switchItUp(n) {
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
    case 9: return 'Nine';
    default: 'Enter a number between 0 and 9';
  


  }
}

console.log(switchItUp(4));