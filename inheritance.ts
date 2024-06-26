// Inherit from another class data and methods
class Person {
  constructor(public name: string, public surname: string) {}
}

class Employee extends Person {
  constructor(public name: string, public surname: string, public department: string) {
    super(name, surname);
  }
}