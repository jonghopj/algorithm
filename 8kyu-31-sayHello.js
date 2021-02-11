// solution1

function sayHello(name, city, state) {
  return 'hello', + name.join(' ') + '! Welcome to' + city + ' ,' + state + '!'
}

// console.log(sayHello(['sam', 'azor'], 'seoul', 'dong'));

// solution2


function sayHello(name, city, state) {
  return `Hello, ${name.join('')}! Welcome to ${city}, ${state}!`;
}

console.log(sayHello(['jongho', 'park'],  ['jeju','island'], 'dong'));