// Rules
// x > y: 3 points

// x = y: 1 point

// x < y: 0 point

// 0 <= x <= 4

// 0 <= y <= 4

// there are 10 matches



// solution1

function points(games) {
  let result = 0;

  for (let i = 0; i < games.length; i++) {
    if (games[i][0] > games[i][2]) {
      result += 3;
    }
    if (games[i][0] === games[i][2]) {
      result += 1;
    }
  }
  return result;
}

// console.log(points(['0:1', '0:2', '0:3', '0:4', '1:2', '1:3', '1:4', '2:3', '2:4', '3:4']));

// solution2

function points(games) {
  let result = 0;

  games.map(i => {
    if (i[0] > i[2]) {
      result += 3;
    }
    if (i[0] === i[2]) {
      result += 1;
    }
  });
  return result;
}
// console.log(points(['0:1', '0:2', '0:3', '0:4', '1:2', '1:3', '1:4', '2:3', '2:4', '3:4']));

// solution3

function points(games) {
  return games.reduce((result,i) => {
    return i[0] > i[2] ? (result += 3) : i[0] === i[2] ? (result += 1) : result;
  }, 0);
}

// console.log(points(['0:1', '0:2', '0:3', '0:4', '1:2', '1:3', '1:4', '2:3', '2:4', '3:4']));

// solution4

function points(games) {
  return games.map(i => i[0] - i[2]).filter(i => i >= 0).reduce((result, i) => result + (i > 0 ? 3 : 1), 0);
}

 console.log(points(['0:1', '0:2', '0:3', '0:4', '1:2', '1:3', '1:4', '2:3', '2:4', '3:4']));