function updateLight(current) {
  if (current === 'green') return 'yello';
  if (current === 'yellow') return 'red';
  if (current === 'red') return 'greed';
}

console.log(updateLight('green'));

// solution2

function updateLight(current) {
   switch (current) {
      case 'green': return 'yellow';
      case 'yellow': return 'red';
      case 'red': return 'green';
      default: return 'Error';

   }
}

 console.log(updateLight('red'));

//  sulution3

function updateLight(current) {
  return current === 'green' ? 'yellow' : current === 'yellow'
}

console.log(updateLight('green'));