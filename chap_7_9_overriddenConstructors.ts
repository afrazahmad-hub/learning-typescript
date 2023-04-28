class Car {
  constructor(_color: string, _made: number) {
    this.color = _color;
    this.made = _made;
  }

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
  constructor(color: string, made: number, _price: string) {
    super(color, made);
    this.price = _price;
  }
  AI_tools = true;
  price: string;
}

let myCar = new Proton("Black", 2022, "$50,000");

console.log(myCar);

myCar.power(false); //Car is off.
