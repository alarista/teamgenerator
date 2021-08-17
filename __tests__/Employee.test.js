const Employee = require("../lib/Employee");

test('Can start the Employee process',() =>{
    const exp = new Employee();
    expect(typeof(exp)).toBe('object');
})

test('Can add name',() =>{
    const name = "Testy";
    const exp = new Employee(name);
    expect(exp.name).toBe(name);
})

test('Can add id',() =>{
    const testID = 1;
    const exp = new Employee("Testy", testID);
    expect(exp.id).toBe(testID);
})

test('Can add email',() =>{
    const testMail = "test@test.com";
    const exp = new Employee("Testy", 1, testMail);
    expect(exp.email).toBe(testMail);
})