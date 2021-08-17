const Intern = require("../lib/Intern");

test("Can add school", () => {
  const testSchool = "ITESM";
  const exp = new Intern("Testy", 1, "test@test.com", testSchool);
  expect(exp.school).toBe(testSchool);
});

test("getRole returns 'Intern'", () => {
  const testRole = "Intern";
  const exp = new Intern("Testy", 1, "test@test.com", "GHUser");
  expect(exp.getRole()).toBe(testRole);
});

test("Can get school username via getSchool()", () => {
  const testSchool = "ITESM";
  const exp = new Intern("Testy", 1, "test@test.com", testSchool);
  expect(exp.getSchool()).toBe(testSchool);
});

