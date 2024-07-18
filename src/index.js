function capitalize(stringToBeCapitalized) {
  let i = 0;
  // eslint-disable-next-line no-useless-escape
  const specialChars = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;
  while (specialChars.test(stringToBeCapitalized.charAt(i)) === true) {
    i += 1;
    if (i >= stringToBeCapitalized.length) {
      return "No valid characters found";
    }
  }
  return (
    stringToBeCapitalized.charAt(i).toUpperCase() +
    stringToBeCapitalized.slice(1)
  );
}

function reverseString(stringToBeReversed) {
  let reversedString = "";
  for (let i = stringToBeReversed.length - 1; i >= 0; i -= 1) {
    reversedString = reversedString.concat(stringToBeReversed.charAt(i));
  }

  return reversedString;
}

function calculator() {
  const add = (num1, num2) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      return "error: the numbers you provided are not numbers";
    }
    let addition = num1 + num2;
    addition = parseFloat(addition.toFixed(2));
    return addition;
  };

  const subtract = (num1, num2) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      return "error: the numbers you provided are not numbers";
    }
    let subtraction = num1 - num2;
    subtraction = parseFloat(subtraction.toFixed(2));
    return subtraction;
  };

  const multiply = (num1, num2) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      return "error: the numbers you provided are not numbers";
    }
    let multiplication = num1 * num2;
    multiplication = parseFloat(multiplication.toFixed(2));
    return multiplication;
  };

  const divide = (num1, num2) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
      return "error: the numbers you provided are not numbers";
    }
    let division = num1 / num2;
    division = parseFloat(division.toFixed(2));
    return division;
  };

  return { add, subtract, multiply, divide };
}

function caesarCipher(plainText, shiftFactor) {
  // eslint-disable-next-line no-useless-escape
  const specialChars = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;
  const savedShiftFactor = parseInt(shiftFactor, 10);
  let finalArr = plainText.split("");
  for (let i = 0; i < finalArr.length; i += 1) {
    if (!specialChars.test(finalArr[i])) {
      let oneChar = plainText.charCodeAt(i);
      oneChar += savedShiftFactor;

      if (oneChar < 65) {
        oneChar = 65 - oneChar;
        oneChar = 91 - oneChar;
      } else if (
        oneChar > 90 &&
        oneChar < 97 &&
        String.fromCharCode(oneChar - savedShiftFactor) <= 90
      ) {
        oneChar -= 90;
        oneChar += 64;
      } else if (
        oneChar < 97 &&
        oneChar > 90 &&
        String.fromCharCode(oneChar - savedShiftFactor) >= 97
      ) {
        oneChar = 97 - oneChar;
        oneChar = 123 - oneChar;
      } else if (oneChar > 122) {
        oneChar -= 122;
        oneChar += 96;
      }

      finalArr[i] = String.fromCharCode(oneChar);
    }
  }

  finalArr = finalArr.join("");
  return finalArr;
}

const mergeSort = (arr) => {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const l = mergeSort(arr.slice(0, mid));
  const r = mergeSort(arr.slice(mid, arr.length));
  return Array.from({ length: l.length + r.length }, () => {
    if (!l.length) return r.shift();
    if (!r.length) return l.shift();
    return l[0] > r[0] ? r.shift() : l.shift();
  });
};

function average(array) {
  const index = Math.floor(array.length / 2);

  return array[index];
}

function min(array) {
  return array[0];
}

function max(array) {
  return array[array.length - 1];
}

function length(array) {
  return array.length;
}

function analyzeArray(array) {
  if (!Array.isArray(array)) return "error";
  const sortedArr = mergeSort(array);

  const averageNum = average(sortedArr);
  const minNum = min(sortedArr);
  const maxNum = max(sortedArr);
  const lengthNum = length(sortedArr);

  return { averageNum, minNum, maxNum, lengthNum };
}

export default capitalize;
export { reverseString, calculator, caesarCipher, analyzeArray };
