import {
  getCountriesAPI,
  getCountryByRegion,
  getcountryNamesByCode,
} from "./fetchCountryApi.js";
import { countryMarkup } from "./countryMarkup.js";
import { markupFullCountry } from "./FullCountryMarkup.js";

const parentEl1 = document.querySelector(".countries-container");
// Rendering all countries
export const renderCountries = async function () {
  const countriesData = await getCountriesAPI();
  parentEl1.innerHTML = "";

  countriesData.forEach(country => {
    // This represents the country object
    const countryData = {
      flag: country.flags.png,
      name: country.name.common,
      population: country.population.toLocaleString(),
      region: country.region,
      capital: country.capital,
    };

    // Build the country markup
    const markup = countryMarkup(countryData);

    document
      .querySelector(".countries-container")
      .insertAdjacentHTML("afterbegin", markup);
  });
};

// Rendering one country
export const renderCountry = async function (data) {
  try {
    const [dt] = await getCountriesAPI(data);

    const countryData = {
      flag: dt.flags.png,
      name: dt.name.common,
      population: dt.population.toLocaleString(),
      region: dt.region,
      capital: dt.capital,
    };

    parentEl1.innerHTML = "";

    // Build the markup
    const markup = countryMarkup(countryData);

    parentEl1.insertAdjacentHTML("afterbegin", markup);
  } catch (err) {
    alert(`Something went wrong 😑`);
    location.reload();
  }
};

// Rendering country based on filter region
export const renderCountriesByRegion = async function (data) {
  const countriesData = await getCountryByRegion(data);
  parentEl1.innerHTML = "";

  countriesData.forEach(country => {
    // This represents the country object
    const countryData = {
      flag: country.flags.png,
      name: country.name.common,
      population: country.population.toLocaleString(),
      region: country.region,
      capital: country.capital,
    };

    // Build the country markup
    const markup = countryMarkup(countryData);

    document
      .querySelector(".countries-container")
      .insertAdjacentHTML("afterbegin", markup);
  });
};

// Rendering full country with other specified details
export const renderFullcountry = async function (country) {
  const parentEl3 = document.querySelector(".main-content");

  const [data] = await getCountriesAPI(country);

  // Getting the borders names
  const countries = await getcountryNamesByCode(data.borders);

  parentEl3.innerHTML = "";

  let countryNames;
  countries.length === 1
    ? (countryNames = countries[0].name.common)
    : (countryNames = countries.map(el => el.name.common));

  // Currency
  const [curr] = Object.values(data.currencies);

  const countryData = {
    flag: data.flags.png,
    cName: data.name.common,
    population: data.population.toLocaleString(),
    region: data.region,
    subregion: data.subregion,
    topLevelDomain: data.tld,
    currency: curr.name,
    language: Object.entries(data.languages)[0],
    capital: data.capital,
    border: countryNames,
  };

  const markup = markupFullCountry(countryData);

  document
    .querySelector(".main-content")
    .insertAdjacentHTML("afterbegin", markup);
};
