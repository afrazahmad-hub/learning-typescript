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
  AI_tools = true;
  price = "$50000";
  owner = "Ahmed";
}

//let myCar = new Proton(); // Asking for parameter values.
let myCar = new Proton("Silver", 2022); // Asking for parametervalues.

console.log(myCar); //Proton {
//   owner: 'Ahmed',
//   made: 2022,
//   color: 'Silver',
//   AI_tools: true,
//   price: '$50000'
// }

myCar.power(true); // Car is start.
