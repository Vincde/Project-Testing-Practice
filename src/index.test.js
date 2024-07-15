import capitalize, { reverseString } from "./index.js";

test("first letter is a capitalized letter", () => {
  let charToControl = capitalize("teidi");
  expect(charToControl.charAt(0)).toBe("T");
});

test("first letter is a capitalized letter ALREADY", () => {
  let charToControl = capitalize("Reidi");
  expect(charToControl.charAt(0)).toBe("R");
});

test("first letter is a special character", () => {
  let charToControl = capitalize("#eidi");
  expect(charToControl.charAt(0)).toBe("E");
});

test("first and third letter is a special character", () => {
  let charToControl = capitalize("#e#di");
  expect(charToControl.charAt(0)).toBe("E");
});

test("all letter are special characters", () => {
  let charToControl = capitalize("####");
  expect(charToControl).toBe("No valid characters found");
});

test("string inserted is correctly reversed", () => {
  let revString = reverseString("ciao");
  expect(revString).toBe("oaic");
});

test("string inserted is correctly reversed with special characters and space", () => {
  let revString = reverseString("c11# ao!");
  expect(revString).toBe("!oa #11c");
});

test("empty string", () => {
  let revString = reverseString("");
  expect(revString).toBe("");
});

test("only space", () => {
  let revString = reverseString("  ");
  expect(revString).toBe("  ");
});
