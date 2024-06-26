//  superclass should be replaceable with objects of its subclasses
// without affecting the correctness of the program

// In essence, this means that a subclass should behave in such a
// way that it can be used interchangeably with its superclass without altering
// the desired properties of the program.

interface Rectangle {
  area(): number;
}

class Person8 implements Rectangle {
  area(): number {
    throw new Error("Method not implemented."); //cannot implement Rectangle, violates Liskov Substitution principle
  }
}