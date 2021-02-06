

// if your name starts with the letter R or lower case r, you are playing banjo.




// solution1
function areYouPlaying(name) {
  if (name[0] === 'R' || name[0] === 'r') {
    return name + ' plays banjo';
  } else {
    return name + 'does not play banjo';
  } 




}

console.log(areYouPlaying('Sam'));

//  solution2

function areYouPlaying(name) {
  if (name[0] === 'R' || name[0] === 'r') {
    return `${name} plays banjo`;
  } else {
    return `${name} does not play banjo`;
  }
}

 console.log(areYouPlaying('Ralph'));


//  solution 3 
function areYouPlaying(name) {
  if (name[0].toLowerCase() === 'r') {
    return `${name} plays banjo`;
  } else {
    return `${name} does not play banjo`;
  }
}

console.log(areYouPlaying('Pj'))

// solution4

function areYouPlaying(name) {
   return `${name} ${name[0].toLowerCase() === 'r' ? 'plays' : 'does not play'} banjo`;
}

console.log(areYouPlaying('pj'));

 solution5

 function areYouPlaying(name) {
    return `${name} ${/^r/i.test(name) ? 'plays' : 'does not play'} banjo`;
 }

  console.log(areYouPlaying('Sam'));