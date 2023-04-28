// Rest parameters.

function wellcome(greet: string, ...names: string[]) {
  for (const name of names) {
    // "For of loop will iterate each element of array and print it"
    console.log(`${greet} ${name}`);
  }
}
wellcome("Welcome", "Fahad", "Hammad", "Azhan");
// Welcome Fahad
// Welcome Hammad
// Welcome Azhan

// Using rest and spread operator together.=============================

let names: string[] = ["Ahmad", "Ali", "Hammad"];
function greeting(greet: string, ...peoples: string[]) {
  for (const name of peoples) {
    console.log(`${greet} ${name}`);
  }
}

greeting("Welcome", ...names);
// Welcome Ahmad
// Welcome Ali
// Welcome Hammad

// Using rest and spread operator together, with different types.=============================

let person: string[] = ["Afraz", "Fahad", "Hammad"];
function Welcome(greet: string, ...name: string[]) {
  for (const name of person) {
    console.log(`${greet} ${name}`);
  }
}
Welcome("Hello", ...person);
// Hello Afraz
// Hello Fahad
// Hello Hammad

// =========================================================================================
// let person: string[] = ["Afraz", "Fahad", "Hammad"];
// let ids: number[] = [313, 101, 555];

// function getData(_person: string[], _id: number[]) {
//   for (const name of person) {
//     for (const id of ids) {
//       console.log(`${name} ${id}`);
//     }
//   }
// }
// getData(person, ids);
