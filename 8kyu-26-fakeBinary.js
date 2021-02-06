// soution 1 
function fakeBinary(x) {
  let result = '';

  for (let i = 0; i < x.length; i++) {
    if (Number(x[i]) < 5) {
      result += '0';
    } else {
      result += '1';
    }
  }
  return result;
}

// console.log(fakeBinary('0123456789'));

// solution2

function fakeBinary(x) {
  return x.split('').map(i => i < 5 ? 0 : 1).join('');
}

// console.log(fakeBinary('0123456789'));

// split() method = 문자열을 부분 문자열로 분활하고, 새 배열로 반환한다.

// map () method 배열 내 모든 element에 대해, 호출한 함수의 결과를 모아 새 배열로 반환한다.

// join() method
// 배열의 모든 element 를 결합하고, 새 문자열로 반환한다.

// solution3

function fakeBinary(x) {
  return x.replace(/[1-4]/g, '0').replace(/[5-9]/g, '1');

}

console.log(fakeBinary('0123456789'));

// solution4

function fakeBinary(x) {
  return x.replace(/\d/g, i => i < 5 ? 0 : 1);
}

console.log(fakeBinary('0123456789'));