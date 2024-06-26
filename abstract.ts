// Cannot be instantiated on its own
// They are used to defined a common interface for a group of related classes

abstract class FileReader2 {
  public fileName: string;


  abstract readKey(): any;

  public convertToTableFormat() {
    return this.readKey().toUpperCase();
  }

}