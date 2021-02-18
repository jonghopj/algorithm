// solution1

function mumbling(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    let temporary = '';

    for (let j = 0; j < i + 1; j++) {
      temporary += j === 0 ? str[i].toUpperCase() : str[i].toLowerCase();
    }
    result.push(temporary);
  }
  return result.join('-');
}

// console.log(mumbling('abcd'));

// solution2

function mumbling(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    result.push(str.charAt(i).toUpperCase() + str.charAt(i).toLowerCase().repeat(i));
  }
  return result.join('-');
}

// console.log(mumbling('abcd'));

// solution3

function mumbling(str) {
  return str.split('').map((i, index) => i.toUpperCase() + i.toLowerCase().repeat(index)).join('-');
}
// console.log(mumbling('abcd'));

// solution4

function mumbling(str) {
  return [...str].map((i, index) =>{
    return i.toUpperCase() + i.toLowerCase().repeat(index);
    
  }).join('-');
}

console.log(mumbling('abcd'));