class Car {
  constructor(_color: string, _made: number, _vin: string) {
    this.color = _color;
    this.made = _made;
    this.vin = _vin;
  }

  readonly vin: string;
  owner = "Afraz";
  made: number;
  color: string;
}

let myCar = new Car("Black", 2022, "1A");

// myCar.vin = "ABc"; // If readonly, can not be mnodified/override.

myCar.owner = "Ahmad"; // If not readonly, can be mnodified.
