//  Creatin an Array:

let brothers: string[] = ["Afraz", "Fahad", "Hammad "];

// A function is returning the array of string.======================================

let greetings: () => string[];
greetings = () => ["Hello", "World", "Good", "Morning"]; //OK
//greetings = () => "Hello"; //Error: only string cant be assign in to the array of string.

// An array is returning the function which will return string value.======================================

let hello: (() => string)[]; // this variable is returning the array of functions.

hello = [() => "Hello", () => "World"]; // OK
//hello = [() => 12, () => true]; //ERROR : Cant assign any value other than returning string
//hello = ["Hello World"]; //ERROR:  Can not assign the string in to the array of functions.
