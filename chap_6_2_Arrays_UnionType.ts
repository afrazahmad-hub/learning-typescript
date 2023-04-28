// Union type array:

// Example 1: ====================
let data: (string | number)[]; // Right way to declare the union type of Array.
data = ["Hello", 123];

let data2: string | number[]; // In this way we can either add only string or an array of numbers.
//data2 = ["Hello", 123]; // Error.
data2 = "Hello";
data2 = [1, 2, 3];

// Evolving any type of array.
// Not recommended.
let data1 = ["Afraz", 123, true]; //OK, TS will infer the types of Array.

// Example 2: ====================
let myData: (string | number)[];
myData = ["Afraz", 313];
