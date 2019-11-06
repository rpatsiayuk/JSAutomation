
class Person {
    constructor(firstName, lastName, age, gender) {
        this.fullName = {
            firstName,
            lastName
        };
        this.age = age;
        this.gender = gender;
    }

    helloPerson() {
        console.log("Hello. I'm a person and my full name is " + this.fullName);
    };
}

module.exports = Person;