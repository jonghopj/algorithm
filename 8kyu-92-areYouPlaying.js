// solution1

function areYouPlaying(name) {
   if (name[0] === 'R' || name[0] ==='r') {
     return name + 'plays banjo';
   } else {
     return name + ' does not play banjo';
   }
}

console.log(areYouPlaying('Sam'));
console.log(areYouPlaying('RORo'));
//solution2

function areYouPlaying(name) {
  if (name[0] === 'R' || name[0] === 'r') {
    return `${name} plays banjo`;
  } else {
    return `${name} does not play banjo`;
  }
}

console.log(areYouPlaying('Sam'));

// solution3


function areYouPlaying(name) {

   if (name[0].toLowerCase() === 'r') {
     return `${name} plays banjo`;
   } else {
     return `${name} does not play banjo`;
   }
}

console.log(areYouPlaying('raraa'));

// solution5

function areYouPlaying(name) {
  return `${name} ${/^r/i.test(name) ? 'plays' : 'does not play'} banjo`;
}

console.log(areYouPlaying('Sam'));