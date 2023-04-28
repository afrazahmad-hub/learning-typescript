class Car {
  color = "Silver";
  power(state: boolean) {
    if (state === true) {
      console.log("Car is start.");
    } else {
      console.log("Car is off.");
    }
  }
}

let myCar = new Car();
myCar.power(false); // Car is off.
