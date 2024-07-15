function capitalize(stringToBeCapitalized) {
  return (
    stringToBeCapitalized.charAt(0).toUpperCase() +
    stringToBeCapitalized.slice(1)
  );
}

export default capitalize;
