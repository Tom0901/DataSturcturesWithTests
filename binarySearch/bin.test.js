const imports = require("./bin");
const { f, i1, i2, i3 } = imports;

test("return -1 when no does not exist in array and return correct index when valid number is passed", () => {
  //size 1 arr
  expect(f(500, i1)).toBe(-1);
  expect(f(1, i1)).toBe(0);
  //size 3 arr
  expect(f(500, i2)).toBe(-1);
  expect(f(1, i2)).toBe(0);
  expect(f(2, i2)).toBe(1);
  expect(f(3, i2)).toBe(2);
  //size 4 arr
  expect(f(500, i3)).toBe(-1);
  expect(f(1, i3)).toBe(0);
  expect(f(2, i3)).toBe(1);
  expect(f(3, i3)).toBe(2);
  expect(f(4, i3)).toBe(3);
});

test("return -1 when passed an empty array", () => {
  expect(f(0, [])).toBe(-1);
});
