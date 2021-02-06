// solution1


function isDividiBy(n, a, b) {
  if (n % a === 0 && n % b === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isDividiBy(12, 2, 3));

// soltution2

function isDividiBy(n, a, b) {
  if (n % a === 0 && n % b === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isDividiBy(12, 2, 3));
// solution3

function isDividiBy(n, a, b) {
  return !(n % a) && !(n % b);
}

console.log(isDividiBy(12, 2, 5));

// solution4
function isDividiBy(n, a, b) {
  return n % a + n % b === 0;
}
console.log(isDividiBy(12, 2, 3));

// solution5

function isDividiBy(n, a, b) {
  return !(n % a + n % b);
}

console.log(isDividiBy(12, 2, 5));


// solution6


function isDividiBy(n, a, b) {
  return !(n % a || n % b);
}

console.log(isDividiBy(12, 2, 3));