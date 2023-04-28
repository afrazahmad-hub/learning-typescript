let namee: string = "AFraz"; //  recomended.

let lName = "Ahmad"; // recommended as TS get the type by it own.

let a = Symbol(); // hovar mouse over "a" will show the type as Symbol.
console.log(a);

// Infer properties of TS:

let game = Math.ceil(Math.random() * 10) < 5 ? "Cool" : "Average";
console.log(game);

// hOW TYPESCRIPR WORKS.

// 1. Reading the code.
// 2. Concluding the type.
// 3. Ananlysing.
// 4. Complaining, is there any error.

let value = "Hello World";
value.length(); // ERROR, because length is a property of number types.
console.log(value.length);

// ERROR TYPES:
// Type error and syntax error.

// Syntax error:
// console.blub();          // Error: Property 'blub' does not exist on type 'Console'.
// let let city = "Islamabad";
let city1; // correction

// Type error:
// Type errors occur when your syntax is valid but the TypeScript type checker
// has detected an error with the program’s types.
let num: number = "Hello"; // type error, Type 'string' is not assignable to type 'number'

// Assignability:
let country = "Pakistan";
country = true; // couldnt assign the bool to string type of variable.

// Type Annotations:
let country1: string;

let country2; // type "any"
country2 = "USA"; // still showing type "any"
country2.toUpperCase(); // now showing type "string"
country2 = true; // still showing type "any".
country2.toUpperCase(); // Error.

let rocker: string; //after compiling to JS the "string" will be romoved.
rocker = "Joan Jett";
// Like this.
let _rocker;
_rocker = "Joan Jett";

// Type Shapes:
let rapper = "Queen Latifah";
rapper.length; // ok

rapper.push("!"); // push is an array prpperty.
// ~~~~
// Property 'push' does not exist on type 'string'.

// OR
let cher = {
  firstName: "Cherilyn",
  lastName: "Sarkisian",
};
cher.firstName; // OK
cher.middleName; //TS knows there is no middlename in "cher" object.
// ~~~~~~~~~~
// Property 'middleName' does not exist on type
// '{ firstName: string; lastName: string; }'.

// Modules: ECMAScript 2015:

//------- 1. Module: --------//
// A file with a top-level export or import
//------- 2. Script: --------//
// Any file that is not a module

// a.ts
export const shared = "Cher";
// b.ts
export const shared = "Cher";
// c.ts
import { shared } from "./a";
// ~~~~~~
// Error: Import declaration conflicts with local declaration of 'shared'.
export const shared = "Cher";
// ~~~~~~
// Error: Individual declarations in merged declaration
// 'shared' must be all exported or all local.

// If a file is a script, though, TypeScript will consider it to be globally scoped,
// meaning all scripts have access to its contents.
// That means variables
// declared in a script file cannot have the same name as variables declared in
// other script files.
// a.ts
const shared = "Cher";
// ~~~~~~
// Cannot redeclare block-scoped variable 'shared'.
// b.ts
const shared = "Cher";
// ~~~~~~
// Cannot redeclare block-scoped variable 'shared'.

// a.ts and b.ts
const shared = "Cher"; // Ok
export {};
