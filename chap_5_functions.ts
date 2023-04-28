// Required parameters:
function hello(name: string) {
  console.log(`Hello ${name}`);
}
//hello(); //Without parameter will through error
hello("Afraz"); // Hello Afraz

// Optional parameters:
function hello1(name: string, age?: number) {
  console.log(`Hello ${name} ${age}`);
}
//hello1(); // will through error
hello1("Afraz"); // OK, no error.
hello1("Afraz", 30);

// Default parameters:
function hello2(name = "Afraz") {
  console.log(`Hello ${name}`);
}
hello2(); // Hello "Afraz", print default value.
hello2("Ahmad"); // Hello "Ahmad", override default value.
hello2(); // OK, as default parameters are also optional parameters.

// ...Rest parameters:
function hello3(name = "Afraz", ...nickNames: string[]) {
  console.log(`Hello ${name} aka ${nickNames}`);
}
hello3("Afraz", "Ahmad", "Jutt", "Chaudhary"); // Hello Afraz, aka Ahmad, Jutt, Chaudhary.

// Return types:
// Implicit type
function _hello(name: string) {
  return name; // name type will be string.
}

// // Explicite type
function _hello1(age: 30): number {
  return age; // age type will be number.
}

// Creating a function type in variable:
let myNAme: (name: string, age: number) => string | number;
