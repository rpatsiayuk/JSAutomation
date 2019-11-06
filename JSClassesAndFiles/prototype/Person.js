//Constructor
function Person(firstName, lastName, age, gender) {
    this.fullName = {
        firstName,
        lastName
    };
    this.age = age;
    this.gender = gender;
}

//Get full name 
Person.prototype.getFullName = function () {
    return this.fullName;
}

Person.prototype.helloPerson = function () {
    console.log("Hello. I'm a person and my age is " + this.age + " and gender " + this.gender);
}

//Inherit prototype
Developer.prototype = Object.create(Person.prototype)

//Constructor Developer
function Developer(firstName, lastName, age, gender, department, salary) {
    Person.call(this, firstName, lastName, age, gender)
    this.fullName = {
        firstName,
        lastName
    };
    this.department = department
    this.salary = salary
}

//Get full information about developer
Developer.prototype.getFullInformation = function () {
    return "My full name is " + this.fullName.firstName + " " + this.fullName.lastName + " my age is " + this.age +
        " my gender is " + this.gender + " my department " + this.department + " and my salary " + this.salary;
}

//Use Developer constructor
Developer.prototype.constructor = Developer;

let person = new Person("John", "Kenzo", 25, "Male");
console.log(person.helloPerson());

//Instantiate Developer Object
let developer = new Developer("Rick", "Jared", 35, "Male", "Java development", 2000);
console.log(developer.getFullName());
console.log(developer.helloPerson());
console.log(developer.getFullInformation())