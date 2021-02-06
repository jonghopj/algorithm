// Solution 1
function hero(bullets, dragons) {
  if (bullets >= dragons * 2) {
    return true;
  } else {
    return false;
  }
}
console.log(hero(0, 1));



// Solution 2
function hero(bullets, dragons) {
  return bullets >= dragons * 2 ? true : false;
}
console.log(hero(0, 1));

// Solution 3
function hero(bullets, dragons) {
  return bullets >= dragons * 2;
}
console.log(hero(0, 1));