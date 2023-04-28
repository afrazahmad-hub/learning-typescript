let nickNames = ["Afraz", "Ahmad", "jutt"];

// function setName(callBack: (name: number) => string) {
//   for (let i = 0; i < nickNames.length; i++) {
//     console.log(callBack(i));
//   }
// }

// function getNames(index: number) {
//   return ` ${nickNames[index]}`;
// }
// setName(getNames);

function setName(callBack: (name: number) => string) {
  for (let i = 0; i < nickNames.length; i++) {
    console.log(nickNames[i]);
  }
}

function getName(index: number) {
  console.log(nickNames[index]);
  return `${nickNames[index]}`;
}
setName(getName);

// =======================

// will behave as it contains a function, which will either return string or number.
let returnStringOrNumber1: () => string | number;

returnStringOrNumber1 = 9; // ERROR, because instead of function we put a single number value.

returnStringOrNumber1 = () => "Afraz"; //OK

returnStringOrNumber1 = () => 345; //OK

// Here this variable contain 2 parts,
// 1st a function which will return a string, 2nd or add a number.
let returnStringOrNumber: (() => string | number) | number;

returnStringOrNumber = 7;

returnStringOrNumber = "Hello"; // ERROR, because string is not mentioned in variable, rather it is number

returnStringOrNumber = function (): string {
  return "Hello";
};

returnStringOrNumber = function (): number {
  return 123;
};

let greet: (morng: string) => string;
greet = (morng) => `GOOD ${morng}`;
