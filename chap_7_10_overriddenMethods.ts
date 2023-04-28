//  # Case 1
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
  power(state: boolean) {
    if (state === true) {
      console.log("Proton car is start.");
    } else {
      console.log("Proton car is off.");
    }
  }
}

let myCar = new Proton("Black", 2022, "$50,000");

console.log(myCar);

myCar.power(true); //Proton car is start. Will cal chield class method.

//  # Case 2
// Using return in methods we have to do minor changes.

class Car2 {
  constructor(_color: string, _made: number) {
    this.color = _color;
    this.made = _made;
  }

  owner? = "Afraz";
  made: number;
  color: string;
  power(state: boolean): string {
    if (state === true) {
      return "Car is start.";
    } else {
      return "Car is off.";
    }
  }
}

class Proton2 extends Car2 {
  constructor(color: string, made: number, _price: string) {
    super(color, made);
    this.price = _price;
  }
  AI_tools = true;
  price: string;
  power(state: boolean): string {
    if (state === true) {
      return " Proton car is start.";
    } else {
      return "Proton car is off.";
    }
  }
}

let myCar2 = new Proton("Black", 2022, "$50,000");

console.log(myCar2);

myCar2.power(true); //Proton car is start. Will cal chield class method.
