// eslint-disable-next-line import/extensions, import/no-named-as-default, import/no-named-as-default-member
import hello from "./index.js";

// eslint-disable-next-line no-undef
test("says hello", () => {
  // eslint-disable-next-line no-undef
  expect(hello()).toBe(2);
});
