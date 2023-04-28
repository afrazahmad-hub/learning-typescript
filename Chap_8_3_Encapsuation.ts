abstract class Country {
  public name: string;
  public language: string;
  public population: number;

  private _stateSecret: string;
  private _leader: string;

  constructor(
    _name: string,
    _language: string,
    _Population: number,
    stateSecret: string,
    leader: string
  ) {
    this.name = _name;
    this.language = _language;
    this.population = _Population;
    this._stateSecret = stateSecret;
    this._leader = leader;
  }

  public get privateData(): string {
    return this._stateSecret;
  }

  public set setLeader(anotherLeader: string) {
    this._leader = anotherLeader;
  }
}

class OICcountries extends Country {
  constructor(
    name: string,
    language: string,
    population: number,

    stateSecret: string,
    leader: string
  ) {
    super(name, language, population, stateSecret, leader);
  }
}

let Pakistan = new OICcountries(
  "Pakistan",
  "Urdu",
  300000000,
  "Pak's private data",
  "Quid E Azam"
);

console.info(Pakistan);
Pakistan.name = "Islamic Republic of Pakistan";
console.info(Pakistan);

//GETTER FUNCTION:===============================

// Error:  because of private properity.
// Pakistan.stateSecret;

// Ok: because this method is accessing the private property of that particulat class
Pakistan.privateData;

//SETTER FUNCTION:===============================

// Error:  because of private properity.
// Pakistan.leader;

// Ok: because this method is accessing the private property of that particulat class

// Before setting new value.
console.info(Pakistan);

Pakistan.setLeader = "Allama Iqbal"; //New Value

// After setting new value.
console.info(Pakistan);
