// It is a user-defined data type
// consists of data members and functions

// Object-oriented programming is a programming paradigm based on the concept of objects,
//which can contain data and code
//https://patrickkarsh.medium.com/7-principles-of-object-oriented-design-1ab0231d610a
interface IPersonProps {
  name: string;
  surname: string;
  carModel?: string;
}

class Person {
  protected name: string;
  protected surname: string;
  protected carModel?: string;

  constructor(p: IPersonProps) {
    Object.assign(this, p);
  }

  public talk() {
    console.log(`${this.name} ${this.surname} is talking...`);
  }
}

const p = new Person({ name: 'John', surname: 'Doe' });
const p2 = new Person({ name: 'John', surname: 'Doe', carModel: 'BMW' });