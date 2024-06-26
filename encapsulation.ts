// Protects internal state and enforce controlled access and modification through public methods

class Person5 {
  private name: string;
  private surname: string;


  // Encapsulates the manipulation
  public setName(name: string) {
    this.name = name;
  }
}