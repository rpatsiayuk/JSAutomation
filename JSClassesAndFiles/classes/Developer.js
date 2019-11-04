class Developer extends Person {
  constructor (firstName, lastName, age, gender, department, salary) {
    super(firstName, lastName, age, gender)
        this.department = department
        this.salary = salary
    }

  helloDeveloper () {
    console.log("Hello. I'm a developer, my full name is ${super.fullName} and salary is ${this.salary}")
    };
}
