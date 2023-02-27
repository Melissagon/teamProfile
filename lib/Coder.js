const Employee = require("./Employee");

class Coder extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getRole() {
    return "Coder";
  }

  getGithub() {
    return this.github;
  }
    
}

module.exports = Coder;
