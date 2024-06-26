// Expose only the essential features of an object while hiding the implementation details
// It provides an interface to the user, allowing the user to interact with the object
// without having to care about the implementation details

interface Shape {
  perimeter(): number;
}

class Square implements Shape {
  constructor(private length: number) {}
  perimeter() {
    return this.length * 4;
  }
}

const square = new Square(4);
square.perimeter(); // I am using the interface (abstraction) here, I do not need the implementation details

// Also abstraction refers to the process of abstract duplicated code into a single interface

abstract class FileSaver {

  public set content(content: string) {
    this.content = content;
  }
  abstract save(filePath: string): void;
}

// here I am abstracting the set content method