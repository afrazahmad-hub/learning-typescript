class Car {
  constructor(_color: string, _made: number) {
    this.color = _color;
    this.made = _made;
  }

  owner = "Afraz";
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

let myCar = new Car("Black", 2022, "1A");

let myCar1: Car; // we asigned the Car as a type to, variable myCar1.

myCar1 = {}; //Type '{}' is missing the following properties from type 'Car': vin, owner, made, color, power

myCar1 = {
  owner: "Afraz",
  made: 2022,
  color: "Black",
  power() {},
}; // OK, now.
