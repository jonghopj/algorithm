// solution1

function feast(beast, dish) {
  const b1 = beast[0];
  const b2 = beast[beast.length - 1];
  const d1 = dish[0];
  const d2 = dish[dish.length - 1];

  return b1 === d1 && b2 === d2 ? true : false;
}

// console.log(feast('panda', 'potato pizza'));


// solution2

function feast ( beast, dish) {
  const b1 = beast[0];
  const b2 = beast[beast. length - 1];
  const d1 = dish[0];
  const d2 = dish[dish.length - 1];
return b1 === d1 && b2 === d2;
}

// console.log(feast('panda', 'hawaiian pizza'));

// solution3

function feast(beast, dish) {
  const b = beast[0] + beast[beast.length - 1];
  const d = dish[0] + dish[dish.length - 1];

  return b === d;
}

// console.log(feast('chicken', 'cold chicken'));


function feast(beast, dish) {
  const b = beast.slice(0, 1) + beast. slice(-1);
  const d = dish.slice(0, 1) + dish.slice(-1);

  return b === d;
}

console.log(feast('chicken', 'cold chicken'));