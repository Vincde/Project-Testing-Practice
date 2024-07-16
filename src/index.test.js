import capitalize, {
  reverseString,
  calculator,
  caesarCipher,
} from "./index.js";

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

test("add 2 numbers", () => {
  let newCalculator = calculator();
  expect(newCalculator.add(2, 3)).toBe(5);
});

test("subtract 2 numbers", () => {
  let newCalculator = calculator();
  expect(newCalculator.subtract(13.4, 6.2)).toBe(7.2);
});

test("multiply 2 numbers", () => {
  let newCalculator = calculator();
  expect(newCalculator.multiply(2.2, 3)).toBe(6.6);
});

test("divide 2 numbers", () => {
  let newCalculator = calculator();
  expect(newCalculator.divide(2.3, 2)).toBe(1.15);
});

test("verify error inserting incorrect value", () => {
  let newCalculator = calculator();
  expect(newCalculator.divide(2, "x")).toMatch("error");
});

test("caesar cypher works as intended", () => {
  let newString = caesarCipher("Io sono vincenzo", 3);
  expect(newString).toBe("Lr vrqr ylqfhqcr");
});

test("caesar cypher works as intended", () => {
  let newString = caesarCipher("JJASDFKLRJIDNVALDJNRLJNDFLK", 3);

  expect(newString).toBe("MMDVGINOUMLGQYDOGMQUOMQGION");
});
