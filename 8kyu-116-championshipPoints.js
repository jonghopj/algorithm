// solution1

 function championshipPoints(games) {
   let result = 0;

   for (let i = 0; i < games.length; i++) {
     if (games[i][0] > games[i][2]) result += 3;
     if (games[i][0] === games[i][2]) result += 1;
   }
   return result;
 }

 console.log(championshipPoints(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3']));


//  solution2

function championshipPoints(games) {
  let result = 0;

  games.map(i =>{

   i[0] > i[2] ? result += 3 : i[0] === i[0] === i[0] ? result += 1 : result += 0;
  });
  return result;
}

console.log(championshipPoints(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3']))

// solution3

function championshipPoints(games) {
  let result = 0;

  games.forEach(i => {
    i[0] > i[2] ? result += 3 : i[0] === i[2] ? result += 1 : result += 0;
  });
  return result;
}

console.log(championshipPoints(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3']));

// solution4

function championshipPoints(games) {
  return games.reduce((result, i) => {
    return result += i[0] > i[2] ? 3 : i[0] === i[2] ? 1 : 0;
  }, 0);
}
console.log(championshipPoints(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3']));