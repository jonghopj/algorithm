function rockPapersScissors( p1, p2) {
  if ( p1 === p2) return 'Draw!';

  if (p1 === 'rock' && p2 === 'scissors') {
    return 'Player 1 won!';
  } else if (p1 === 'paper' && p2 === 'rock') {
    return 'Player 1 won!';
  } else if (p1 === 'scissors' && p2 === 'paper') {
    return 'Player 1 won!';
  } else {
    return 'Player 2 won!';
  }
}

// console.log(rockPapersScissors('rock', 'rock'));
// solution2

function rockPaperScissors(p1, p2) {
  if (p1 === p2) return 'Draw!';
  
  const rules = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  };
  
  if (rules[p1] === p2) {
    return 'Player 1 won!';
  } else {
    return 'Player 2 won!';
  }
}

// console.log(rockPaperScissors('paper', 'rock'));

// solution3

function rockPaperScissors(p1, p2) {
  const rules = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
  };
  
  if (p1 === p2) {
    return 'Draw!';
  } else {
    return 'Player ${rules[p1] === p2 ? 1 : 2} won!';
  }
}

// console.log(rockPapersScissors('paper', 'paper'));


// solution4
function rockPaperScissors(p1, p2) {
  if (p1 === p2) return 'Draw!';
  
  return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1 + p2) ? 1 : 2} won!`;
}

console.log(rockPapersScissors('paper', 'paper'));
