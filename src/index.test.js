import capitalize from "./index.js";

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
