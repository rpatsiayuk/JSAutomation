let Person = require('./Person')
class Manager extends Person {

    constructor(firstName, lastName, department, countOfPeople) {
        super(firstName, lastName);
        this.department = department;
        this.countOfPeople = countOfPeople;
    }

    helloManager() {
        console.log("Hello. I'm a manager, my department is ${this.department} and count of people ${this.countOfPeople}")
    }
}

module.exports = Manager;