const Engineer = require("../lib/Engineer");

test("Can add GitHub", () => {
  const testGit = "GHUser";
  const exp = new Engineer("Testy", 1, "test@test.com", testGit);
  expect(exp.gith).toBe(testGit);
});

test("getRole returns 'Engineer'", () => {
  const testRole = "Engineer";
  const exp = new Engineer("Testy", 1, "test@test.com", "GHUser");
  expect(exp.getRole()).toBe(testRole);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GHUser";
  const exp = new Engineer("Testy", 1, "test@test.com", testValue);
  expect(exp.getGithub()).toBe(testValue);
});