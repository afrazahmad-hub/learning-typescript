abstract class Base {
  abstract name: string;

  abstract getName(): string;

  printName() {
    console.log(`Hello ${this.getName}`);
  }
}

class Drived extends Base {
  name: string = "Abstraction";

  getName(): string {
    return "World";
  }
}

const d = new Drived();
console.log(d.printName); // Hello World
