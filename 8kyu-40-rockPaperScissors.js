function rockPaperScissors(p1, p2) {
  if (p1 === 'rock' && p2 === 'rock') return 'Draw!';
  if (p1 === 'rock' && p2 === 'paper') return 'Player 2 won!';
  if (p1 === 'rock' && p2 === 'scissors') return 'Player 1 won!';
  if (p1 === 'paper' && p2 === 'rock') return 'Player 1 won!';
  if (p1 === 'paper' && p2 === 'paper') return 'Draw!';
  if (p1 === 'paper' && p2 === 'scissors') return 'Player 2 won!';
  if (p1 === 'scissors' && p2 === 'rock') return 'Player 2 won!';
  if (p1 === 'scissors' && p2 === 'paper') return 'Player 1 won!';
  if (p1 === 'scissors' && p2 === 'scissors') return 'Draw!';


}

// console.log(rockPaperScissors('rock', 'paper'));


function rockPaperScissors(p1, p2) {

  if (p1 === p2) return 'Draw';

  if (p1 === 'rock' && p2 === 'paper') return 'player 2 won!'
  else if (p1 === 'paper' && p2 === 'scissors') return 'player 2 won!';
  else if (p1 === 'scissors' && p2 === 'rock') return 'player 2 won!';
  else return 'player 1 won!';
}

// console.log(rockPaperScissors('rock', 'rock'));


// solution3

function rockPaperScissors(p1, p2) {
  if (p1 === p2) return 'draw!';

  const obj = {
    rock: 'scissors',
    paper: 'rock',
    cissors: 'paper'
  };

  if (p1 === obj[p2]) {
    return 'player 2 won!';
  } else {
    return 'player 1 won!';
  }

  
}

console.log(rockPaperScissors('rock', 'rock'));