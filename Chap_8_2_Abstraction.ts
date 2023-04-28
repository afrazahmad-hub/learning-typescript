abstract class Country {
  public name: string;
  public language: string;
  public population: number;
  public totalGDP: number;
  public gdpGrowthRate: number;
  public perCapitaIncome: number;

  constructor(
    _name: string,
    _language: string,
    _Population: number,
    _totalGDP: number,
    _gdpGrowthRate: number,
    _PCI: number
  ) {
    this.name = _name;
    this.language = _language;
    this.population = _Population;
    this.totalGDP = _totalGDP;
    this.gdpGrowthRate = _gdpGrowthRate;
    this.perCapitaIncome = _PCI;
  }

  abstract gdpGrowth(): number;

  abstract perCapitaIn(): number;
}

class OICcountries extends Country {
  constructor(
    name: string,
    language: string,
    population: number,
    totalGDP: number,
    gdpGrowtrhRate: number,
    perCapitaIncome: number
  ) {
    super(
      name,
      language,
      population,
      totalGDP,
      gdpGrowtrhRate,
      perCapitaIncome
    );
  }

  gdpGrowth(): number {
    this.totalGDP = this.totalGDP * (1 + this.gdpGrowthRate / 100);
    return this.totalGDP;
  }

  perCapitaIn(): number {
    this.perCapitaIncome = this.totalGDP / this.population;
    return this.perCapitaIncome;
  }
}

// Adding first countery.
let Pakistan = new OICcountries(
  "Pakistan",
  "Urdu",
  300000000,
  346000000000,
  3.5,
  2000
);

Pakistan.perCapitaIn();
Pakistan.gdpGrowth();

// Adding another countery.
let Malaysia = new OICcountries(
  "Malaysia",
  "Malay",
  500000000,
  946000000000,
  7.5,
  5000
);

console.info(Pakistan);
console.info(Malaysia);
