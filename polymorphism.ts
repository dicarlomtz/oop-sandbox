// It is a concept that allows objects of different types to be treated as instances of a common superclass
interface Car {
  drive(): void;
}

class BMW implements Car {
  drive() {
    console.log('BMW is driving...');
  }
}

class Tesla implements Car {
  drive() {
    console.log('Tesla is driving...');
  }
}

const bmw: Car = new BMW();
const tesla: Car = new Tesla();

bmw.drive();
tesla.drive();