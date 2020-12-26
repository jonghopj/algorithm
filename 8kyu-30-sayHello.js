function sayHello(name, city, state) {
  return 'Hello, ' + name.join(' ') + '! Welcome to ' + city + ', ' + state + '!'
}

console.log(logsayHello(['Sam', 'Azor'], 'Dubbo', 'New South Wales'));

 function sayHello(name, city, state) {
    return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`;
 }

 console.log(sayHello(['Sam', 'Azor'], 'Dubbo', 'New South Wales'));





