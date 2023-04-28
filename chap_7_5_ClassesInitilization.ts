class Car {
  constructor(_color: string, _made: number) {
    this.color = _color;
    this.made = _made;
  }
  made: number;
  color: string;
  owner!: string; // we can either use exclimation marks or qestion marks to make a property optional.
  //  " ! " mark define that there will be the data in the property, will not be undefined.
  //  " ? " mark showes that optional, and can be undefined.
}
