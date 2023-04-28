// Array Spread:

// Spread operetor spread the values of the array.

let names: string[] = ["Ahmad", "Ali"];

let getNames = [...names];
console.log(getNames); //[ 'Ahmad', 'Ali' ]

let age: number[] = [12, 23, 45];
let getAge: number[] = [...age];
console.log(getAge); //[ 12, 23, 45 ]

// Combining the number and streings.
let combine = [...names, ...age]; //hover: let combine: (string | number)[]
console.log(combine); //[ 'Ahmad', 'Ali', 12, 23, 45 ]

// Example 2: ===================================
let me: string[] = ["Afraz", "Ahmad"];
let myID: number = 313;

let comData = [...me, myID]; // hover; let comData: (string | number)[]
console.log(comData); //[ 'Afraz', 'Ahmad', 313 ]
