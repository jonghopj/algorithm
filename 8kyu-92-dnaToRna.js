// solution1

function dnaToRna(dna) {
  let result = '';

  for (let i = 0; i < dna.length; i++) {
    if (dna[i] ==='T') {
      result += 'U';
    } else {
      result += dna[i];
    }
  }
  return result;
}

console.log(dnaToRna('GCAT'));

//  solution 2


function dnaToRna(dna) {
  let result = '';

  for (let i =0; i < dna.length; i++) { dna[i] === 'T' ? result += 'U' : result += dna[i];
}
return result;
}

console.log(dnaToRna('TTTT'));

// solution3

function dnaToRna(dna) {
  return dna.split('T').join('U');
}

console.log(dnaToRna('TTTT'));

// solution4

function dnaToRna(dna){
  return dna.replace(/T/g, 'pj is having fun');
}

console.log(dnaToRna('TTTT'));