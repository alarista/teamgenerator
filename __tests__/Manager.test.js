const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

test("Can add office number", () => {
  const testOffNum = 11;
  const exp = new Manager("Testy", 1, "test@test.com", testOffNum);
  expect(exp.officeNum).toBe(testOffNum);
});

test("getRole returns 'Manager'", () => {
  const testRole = "Manager";
  const exp = new Manager("Testy", 1, "test@test.com", 11);
  expect(exp.getRole()).toBe(testRole);
});

test("Can get office number via getOffice()", () => {
  const testValue = 11;
  const exp = new Manager("Testy", 1, "test@test.com", testValue);
  expect(exp.getOfficeNum()).toBe(testValue);
});