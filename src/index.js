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

export default capitalize;
export { reverseString };
