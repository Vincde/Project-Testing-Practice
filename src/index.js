function capitalize(stringToBeCapitalized) {
  let i = 0;
  let specialChars = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;
  while (specialChars.test(stringToBeCapitalized.charAt(i)) === true) {
    i++;
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
  for (let i = stringToBeReversed.length - 1; i >= 0; i--) {
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
  shiftFactor = parseInt(shiftFactor);
  let finalArr = plainText.split("");
  for (let i = 0; i < finalArr.length; i++) {
    if (finalArr[i] === " ") continue;

    let oneChar = plainText.charCodeAt(i);
    oneChar += shiftFactor;

    if (oneChar < 65) {
      oneChar = 65 - oneChar;
      oneChar = 91 - oneChar;
    } else if (
      oneChar > 90 &&
      oneChar < 97 &&
      String.fromCharCode(oneChar - shiftFactor) <= 90
    ) {
      oneChar = oneChar - 90;
      oneChar = oneChar + 64;
    } else if (
      oneChar < 97 &&
      oneChar > 90 &&
      String.fromCharCode(oneChar - shiftFactor) >= 97
    ) {
      oneChar = 97 - oneChar;
      oneChar = 123 - oneChar;
    } else if (oneChar > 122) {
      oneChar = oneChar - 122;
      oneChar = oneChar + 96;
    }

    finalArr[i] = String.fromCharCode(oneChar);
  }

  finalArr = finalArr.join("");
  return finalArr;
}

export default capitalize;
export { reverseString, calculator, caesarCipher };
