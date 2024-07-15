import capitalize from "./index.js";

test("first letter is a capitalized letter", () => {
  let aa = capitalize("heidi").charAt(0);
  let bb = capitalize("heidi").charAt(0).toUpperCase();
  expect(aa).toBe(bb);
});
