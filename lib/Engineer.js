const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {

        super(name, id, email);
        this.github = github;
        this.role = 'Engineer';
        this.github = github;
    }
}

 module.exports = Engineer;