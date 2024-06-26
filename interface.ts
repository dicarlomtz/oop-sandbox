// Interfaces are contracts

interface IMove {
  move(): void;
}

class Person3 implements IMove {
  move() {
    console.log('I am walking');
  }
}

class Bird implements IMove {
  move() {
    console.log('I am flying');
  }
}