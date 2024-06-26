// Components should depend on abstractions, not concretions

interface FileReader2 {
  read(): void;
}
class XMLFileReader  implements FileReader2 {
  read() {
    console.log('Reading XML file');
  }
}

class JSONFileReader implements FileReader2 {
  read() {
    console.log('Reading JSON file');
  }
}

class ReadFileService {
  private fileReader: FileReader2; // if this was not file reader, then we would need to change the constructor
  constructor(fileReader: FileReader2) {
    this.fileReader = fileReader;
  }
  readFile() {
    this.fileReader.read();
  }
}