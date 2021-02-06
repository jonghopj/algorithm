// Write a function to split a string and convert it into an array of words.Write




 
function stringToArray(str) {
   return str.split (' ');
}

console.log(stringToArray('ab c'));


// solution2


function stringToArray(str) {
  return str.split(/\s/);
}

console.log(stringToArray('aa b ccc'));