// Classes should not be enforced to implement something they cant do

interface Shape {
  area(): number;
  // volume(): void;
}

interface DimensionalShape extends Shape {
  volume(): number;
}

class Circle implements DimensionalShape {
  area(): number {
    throw new Error("Method not implemented.");
  }
  volume(): number {
    throw new Error("Method not implemented.");
  }
}

// class Circle implements Shape {
//   area(): number {
//     throw new Error("Method not implemented.");
//   }
//   volume(): void {
//     throw new Error("Method not implemented.");
//     // circle cant implement volume
//   }
// }

