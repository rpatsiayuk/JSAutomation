let Person = require('./Person')
let Developer = require('./Developer')
let Manager = require('./Manager')

let person = new Person("John", "Kenzo", 25, "Male");
console.log(person.helloPerson());

let developer = new Developer("John", "Kenzo", "Java development", 1000);
console.log(developer.helloDeveloper());

let manager = new Manager("Daniel", "Dudov", "Java manager", 15)
console.log(manager.helloPerson());
console.log(manager.helloManager());
