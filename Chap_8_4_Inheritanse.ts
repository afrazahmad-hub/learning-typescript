abstract class Country {
  public name: string;
  public language: string;
  public population: number;

  private _stateSecret: string;
  private _leader: string;

  public planet = "Earth";
  public religian: string;

  constructor(
    _name: string,
    _language: string,
    _Population: number,
    stateSecret: string,
    leader: string,
    _religian: string
  ) {
    this.name = _name;
    this.language = _language;
    this.population = _Population;
    this._stateSecret = stateSecret;
    this._leader = leader;
    this.religian = _religian;
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
    leader: string,

    religian = "Islam"
  ) {
    super(name, language, population, stateSecret, leader, religian);
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
