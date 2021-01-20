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
  //   let array1 = [];
  //   for (let x = 0, y = 1; x < str.length; x++, y++) {
  //     array1[x] = str.slice(x, y);
  //   }
  //   let final = [];
  //   let temp = "";
  //   let math = Math.pow(2, array1.length);

  //   for (let i = 0; i < math; i++) {
  //     temp = "";
  //     for (let j = 0; j < array1.length; j++) {
  //       if (i & Math.pow(2, j)) {
  //         temp += array1[j];
  //       }
  //     }
  //     if (temp !== "") {
  //       final.push(temp);
  //     }
  //   }
  //   return final.join(", ");
  // }var lenStr = str.length;
  var result = [];
  var indexCurrent = 0;

  while (indexCurrent < lenStr) {
    var char = str.charAt(indexCurrent);
    var x;
    var arrTemp = [char];

    for (x in result) {
      arrTemp.push("" + result[x] + char);
    }
    result = result.concat(arrTemp);

    indexCurrent++;
  }

  return result;
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
