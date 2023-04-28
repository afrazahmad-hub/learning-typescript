//  # Case 1

class Car {
  constructor(_color: string, _made: number, _vin: string | number) {
    this.color = _color;
    this.made = _made;
    this.vin = _vin;
  }

  readonly vin: string | number;

  owner? = "Afraz";
  made: number;
  color: string;
  power(state: boolean) {
    if (state === true) {
      console.log("Car is start.");
    } else {
      console.log("Car is off.");
    }
  }
}

class Proton extends Car {
  constructor(color: string, made: number, vin: number, _price: string) {
    super(color, made, vin);
    this.price = _price;
  }
  AI_tools = true;
  price: string;
  power(state: boolean) {
    if (state === true) {
      console.log("Proton car is start.");
    } else {
      console.log("Proton car is off.");
    }
  }
}

let myCar = new Car("Black", 2022, "234");
let myProton = new Proton("Black", 2022, 234, "$50,000"); // override the property.

console.log(myCar);

myCar.power(true); //Proton car is start. Will cal child class method.
