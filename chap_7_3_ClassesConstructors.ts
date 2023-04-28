class Car {
  constructor(_color: string) {
    this.color = _color;
  }
  color: string;
  power(state: boolean) {
    if (state === true) {
      console.log("Car is start.");
    } else {
      console.log("Car is off.");
    }
  }
}

let myCar1 = new Car("Black");
console.log(myCar1.color); //Black
console.log(`My car is ${myCar1.color}`); // My car is Black

let myCar2 = new Car("Silver");
console.log(`Your car is ${myCar2.color}`); // Your car is Silver
