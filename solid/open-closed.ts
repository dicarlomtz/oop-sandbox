// A class should be open to extension but closed for modification

interface Shape {
  area(): number;
}

class AreaCalculator {
  calculateArea(shapes: Shape[]): number {
    // if we did not have the shape interface, we would have to iterate over all the shapes
    // asking the specific type to calculate the area here
    return shapes.reduce((acc, curr) => acc + curr.area(), 0);
  }
}


class Square implements Shape {
  constructor(private length: number) {}

  area(): number {
    return this.length * this.length;
  }
}