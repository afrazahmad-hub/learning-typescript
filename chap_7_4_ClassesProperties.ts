//  We can access only those properties in objects, which are available in class.

class Car {
  constructor(_color: string, _made: number) {
    this.color = _color;
    this.made = _made;
  }
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

let myCar1 = new Car("Black", 2022);
console.log(myCar1.color); //Black
console.log(myCar1.made); //2022
console.log(`My car is ${myCar1.color}`);

let myCar2 = new Car("Silver", 2020);
console.log(`Your car is ${myCar2.color}`);
console.log(`Your car is ${myCar2.made}`);
//console.log(`Your car is ${myCar2.location}`); // Location property doesnot exist, if we access it, it will through an error.
