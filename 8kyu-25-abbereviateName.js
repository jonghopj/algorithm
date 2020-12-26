function abbreviateName(name) {
  let arr = name.split(' ');
  let result = [];
  
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i][0].toUpperCase());
  }
  return result.join('.');
}


console.log(abbreviateName('Sam Azor'));

2


function abbreviateName(name) {
  let arr = name.split(' ');
  
  return (arr[0][0] + '.' + arr[1][0]).toUpperCase();
}

console.log(abbreviateName('Jongho Park'));


3


function abbreviateName(name) {

  let arr = name.toUpperCase().split(' ');

  return arr[0][0] + '.' + arr [1][0];
}

console.log(abbreviateName('Sam Azor'));

4


function abbreviateName(name) {
  return name.split(' ').map(i => i[0].toUpperCase()).join('.');

}

console.log(abbreviateName('Sam Azor'));

5

function abbreviateName(name) {
   return name.split(' ').map(i => i.substr(0, 1).toUpperCase()).join('.');
}

console.log(abbreviateName('Sam Azor'));

 6

function abbreviateName(name) {
  return name.match(/\b\w/g).join('.').toUpperCase();
}

console.log(abbreviateName('Sam Azor'));