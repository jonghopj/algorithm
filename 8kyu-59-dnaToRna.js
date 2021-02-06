// DNA is the primary informations storage molecule in biological system

// RNA is the primary messenger molecule in cells

// RNA differs slightly from DNA its chemical structure and contains no Thymine.

// in TNA Thmine is replaced be another nucleic acid Uracil
// create a function which translates a given DNA string into RNA

// solution1


 function dnaToRna(dna) {
    let result = '';

     for (let i = 0; i < dna.length; i++) {
       if (dna[i] === 'T') {
         result += 'U';
       } else {
         result += dna[i];
       }
     }

      return result;
 }


 console.log(dnaToRna('TTTT'));

// solution2

function dnaToRna(dna) {
  let result = '';

   for (let i = 0; i < dna.lengrth; i++) {
     dna[i] === 'T' ? result += 'U' : result += dna[i];
   }
   return result;
}


 console.log('TTTT');








// solution3


 function dnaToRna(dna) {
   return dna.split('T').join('U');
 }

  console.log(dnaToRna('TTTT'));



//  solution 4


 function dnaToRna(dna) {
    return dna.replace(/T/g, 'U');
 }

  console.log(dnaToRna('TTTT'));