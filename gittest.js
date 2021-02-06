// this is test page.
function generateHashtag(str) {
  str = str.split(' ').reduce((total, i) => {
    return total + (i ? i[0].toUpperCase() + i.slice(1) : '');
  }, '#');
  
  return str === '#' || str.length > 140 ? false : str;
}
// console.log(generateHashtag(''));