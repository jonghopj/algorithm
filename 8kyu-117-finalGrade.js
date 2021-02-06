// solution1

function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) return 100;
  if (exam > 75 || projects >= 5) return 90;
  if (exam > 50 || projects >= 2) return 75;
  return 0;
}

console.log(finalGrade(91, 0));

// solution2

function finalGrade(exam, projects) {
  if (exam > 90 || projects > 100) {
    return 100;;
  } else if(exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  } else {
    return 0;
  }
}

console.log(finalGrade(91, 0));


// solution3


function finalGrade(exam,projects) {
  return exam > 90 || projects > 10 ? 100 : exam > 75 && projects >= 5 ? 90 : exam > 50 && projects >= 2 ? 75 : 0;
}

console.log(finalGrade(91, 0));