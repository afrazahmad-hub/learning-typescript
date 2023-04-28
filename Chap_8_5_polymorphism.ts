class Country {
  public name: string;
  public language: string;
  public population: number;

  constructor(_name: string, _language: string, _Population: number) {
    this.name = _name;
    this.language = _language;
    this.population = _Population;
  }

  public greetings(): string {
    return "Hello";
  }
}

class OICcountries extends Country {
  constructor(name: string, language: string, population: number) {
    super(name, language, population);
  }

  public greetings(): string {
    return "Assalamo-alikum";
  }
}

let Pakistan = new OICcountries("Pakistan", "Urdu", 300000000);
Pakistan.name = "Islamic Republic of Pakistan";
console.log(Pakistan.greetings()); // Assalamo-alikum

console.info(Pakistan);

let China = new Country("China", "Chienes", 700000000);
console.log(China);

console.log(China.greetings()); // Hello
