function calculateAge(birthYear, currentYear) {
  const age = currentYear - birthYear;

   if (age === 1) return 'you are 1 year old.';
   else if (age === -1) return 'you will be born in 1 year.';
   else if (age > 0) return `you are ${age} years old.`;
   else if (age < 0) return `you will be born in ${-age} years.`;
   else return 'you were born this very year!'; 
}

console.log(calculateAge(1988, 1988));


function calculateAge(birthYear, currentYear) {
  let year = Math.abs(birthYear - currentYear) === 1 ? 'year' : 'years';

  if (birthYear === currentYear) return 'you were born this very year';
  if (birthYear < currentYear) return `You are ${currentYear - birthYear} ${year} old.`;
  if (birthYear > currentYear) return `You will be born in ${-currentYear + birthYear} ${year}.`;
}

console.log(calculateAge(1988, 1988));