//Question 1
function myReverse(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

//Question 2
function allCombinations(str) {
  let arr1 = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      arr1.push(s.slice(i, j + 1));
    }
  }
  return arr1;
}

//Question 3
function allCaps(str) {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
}

//Question 4
function myPower(x, n) {
  let pow = 1;
  for (let i = 1; i <= n; i++) {
    pow *= x;
  }
  return pow;
}
//Question 5
function getFirstNotRepeating(str) {
  for (let i = 0; i < str.length; i++) {
    let actual = str.charAt(i);
    if (str.indexOf(actual) == str.lastIndexOf(actual)) {
      return actual;
    }
  }
}

//Question 6 (Bonus)
function isPrefectNumber(num) {
  let num2 = 0;
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      num2 += i;
    }
  }
  if (num2 == num) {
    return true;
  } else {
    return false;
  }
}

// *** Playground ***
// Feel free to run and test your code here on your own

// *** End of Playground ***

// Don't touch me :)
exports.myReverse = myReverse;
exports.allCombinations = allCombinations;
exports.allCaps = allCaps;
exports.myPower = myPower;
exports.getFirstNotRepeating = getFirstNotRepeating;
exports.isPrefectNumber = isPrefectNumber;
