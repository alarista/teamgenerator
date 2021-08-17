const Employee = require("./Employee");
class Engineer extends Employee {
  constructor(name, id, email, gith) {
    super(name, id, email);
    this.gith = gith;
  }
  getRole() {
    return "Engineer";
  }
  getGithub() {
    return this.gith;
  }  
}
module.exports = Engineer;
