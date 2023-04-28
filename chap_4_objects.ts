// TYPIC 2. OBJECTS:
// define object as a type:
// type Alyses
type afraztype = {
  name: { firstName: String; lastName: String };
  age: Number;
  dob: Date;
  studying: boolean;
  certification: string[];
};

let Afraz: afraztype;

Afraz = {
  name: { firstName: "Afraz", lastName: "Ahmad" },
  age: 30,
  dob: new Date(),
  studying: true,
  certification: ["Blockchain", "Web3 & Metaverse"],
};

Afraz = "Ahmad"; //will show arror, as string is not alowed to assign afrazType.

// Duck type:
type FirstName = { firstName: string }; //both fist name and last name has become the type of string.
type LastName = { lastName: string };

let fullName = { firstName: "Afraz", lastName: "Ahmad" };

let firstName: FirstName = fullName;
let lastName: LastName = fullName;

// typescript only accept the properties avaialable in an object,
// properties which are not available in object will not shown in object.
// if we would try to add extra property, it will return an error.

type afraztype2 = {
  name: { firstName: String; lastName: String };
  age: Number;
  dob: Date;
  studying: boolean;
  certification?: string[];
  // by adding the question mark we can make a property "Optional"
  // Will not show an error either we use it or not.
};

//TOPIC 1: UNION OF TYPES:

// Mutually exclusive:
const book =
  Math.random() > 0.5
    ? { neme: "The Prince", Author: "Abc", Pages: 100 }
    : { neme: "Why Nations Fail", Author: "Bcd", Words: 800 };

// Mutually exclusive:
// In first 'words' will be optional, while in second 'Pages' will be optional.
const book:
  | {
      neme: string;
      Author: string;
      Pages: number;
      Words?: undefined;
    }
  | {
      neme: string;
      Author: string;
      Words: number;
      Pages?: undefined;
    };

// UINIONS:

type BookWithPoem = { name: string; pages: number };
type BookWithStories = { name: string; isNice: boolean };

type Book = BookWithPoem | BookWithStories;

let _book: Book =
  Math.random() > 0.5
    ? { name: "My poetry", pages: 10 }
    : { name: "History", isNice: true };

_book.name; //No error, because available in both sections.
_book.pages; //ERROR:  Property 'pages' does not exist on type 'Book'.
// Property 'pages' does not exist on type 'BookWithStories'.

// to solve the above problem we use Narrowing:
if ("pages" in _book) {
  _book.pages;
} else {
  _book.isNice;
}
// OR
if ("isNice" in _book) {
  _book.name;
  _book.isNice;
} else {
  _book.name;
  _book.pages;
}

// Narrowing through discreminating the "type".
type afrazPakistan = { name: string; age: number; type: "Pakistan" };
type afrazOverseas = { oName: string; type: "overseas"; nickame: string };

type afraz = afrazPakistan | afrazOverseas;

let _Afraz: afraz =
  Math.random() > 0.5
    ? { name: "Afraz", age: 33, type: "Pakistan" }
    : { oName: "Ahmad", type: "overseas", nickame: "Ahmad" };

if (_Afraz.type === "overseas") {
  console.log(`Call me ${_Afraz.nickame}`);
} else {
  console.log(`Call me ${_Afraz.name}`);
}

// BOOK :-
type poet = {
  born: number;
  name: string;
};

let Poet: poet;

Poet = {
  born: 1990,
  name: "Afraz",
};

type withFirstName = {
  firstName: string;
};

type bothNames = {
  firstName: string;
  lastName: string;
};

let useBoth: bothNames = {
  firstName: "Afraz",
  lastName: "Ahmad",
};

const exraAct = {
  activity: "Coding",
  born: 1935,
  name: "Afraz",
};

const _new: poet = exraAct;
exraAct === Poet;
// Accessing the object inside object as a object type.
type Author = {
  firstNamee: string;
  lastNamee: string;
};

type Poem = {
  author: Author;
  name: string;
};

let accessVal: Poem;

accessVal = {
  author: {
    firstNamee: "Salvia",
    lastNamee: "Plath",
  },
  name: "bac Book",
};

//  declaring an object property as an optional.
type village = {
  _village: string;
  _post_ofc: string;
  _post_code?: number;
};

let data: village = {
  _village: "Gochh",
  _post_ofc: "Aach",
  //_post_code: // OK,  optional,
};

type poemWithName = {
  name: string;
  pages: number;
};
type poemWithryhems = {
  name: string;
  rythems: boolean;
};

type _Poem = poemWithName | poemWithryhems;

let poemm: _Poem =
  Math.random() > 0.5
    ? { name: "abc", pages: 234 }
    : { name: "bcd", rythems: true };

poemm.name; // No problem

poemm.pages; // Property 'pages' does not exist on type 'poemWithryhems'.

// // Nerrowing :
if ("rythems" in poemm) {
  console.log(`${poemm.rythems} in poemm`);
} else {
  console.log(`${poemm.pages} in poemWithRythems`);
}

// // discriminated union,
type _poemWithName = {
  name: string;
  pages: number;
  type: "Name";
};
type _poemWithryhems = {
  name: string;
  ryhems: boolean;
  type: "ryhems";
};

type Poem_ = _poemWithName | _poemWithryhems;

let poem_: Poem_ =
  Math.random() > 0.5
    ? { name: "abc", pages: 234, type: "Name" }
    : { name: "bcd", ryhems: true, type: "ryhems" };

if (poem_.type === "Name") {
  console.log(`${poem_.pages} in poemm book`);
} else {
  console.log(`${poem_.ryhems} in poemWithRythems`);
}

type Artwork = {
  genre: string;
  name: string;
};
type Writing = {
  pages: number;
  name: string;
};
type WrittenArt = Artwork & Writing;

let val: WrittenArt =
  Math.random() > 0.5
    ? { genre: "abc", name: "cde" }
    : { pages: 345, name: "xyz" };

console.log(val.name);
console.log(val.genre);
console.log(val.pages);
