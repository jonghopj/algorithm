// solution1


function updateLight(current) {
  if (current === 'green') return 'yellow';
  if (current === 'yellow') return 'red';
  if (current === 'red') return 'green';
}

console.log(updateLight('green'));

// solution2

function updateLight(current) {
  switch (current) {
    case 'green': return 'yellow';
    case 'yellow': return 'red';
    case 'red': return 'green';
  }
}


console.log('green');

// solution3

function updateLight(current) {
  return current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green';
}

console.log(updateLight('green'));