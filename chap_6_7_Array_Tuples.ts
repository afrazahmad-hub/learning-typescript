// Tuple:
let myDataTuple: [string, number];
myDataTuple = ["hello", 2]; // OK. Can add only fixed values, with specific sequence only.
// myDataTuple = ["hello", 2, 2]; //ERROR: Access properties added.
// myDataTuple = ["hello", 2, "World"]; //ERROR: Access properties added.
// myDataTuple = [2, "hello"]; // Error: sequence is not appropriate.

// Normal array:
let myDataArray: (string | number)[];
myDataArray = ["Hello", "World", 123, 34, 45, 566, "Welcome"]; // OK, Everything is available.

// We can store tuple like this too:======================
let [person, age, city] = ["Afraz", 30, true];
