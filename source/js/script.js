"use strict";
import data from "../../data.json" assert { type: "json" };

// console.log(data);

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Checking the theme
const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
  }
};

// Switching the theme from dark mode to light mode and vice versor
const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
};

// Toggling dark mode
const btn = document.querySelector(".theme-toggle");
btn.addEventListener("click", () => {
  themeSwitch();
});
// Initialising themecheck at page load
themeCheck();

/////////////////////////////////////////////////////////
//API HTTP REQUEST
const parentEl = document.querySelector(".countries-container");
// console.log(data[5]);
const country = {
  flag: data[5].flags.png,
  name: data[5].name,
  population: data[5].population,
  region: data[5].region,
  capital: data[5].capital,
};

// console.log(country);
const renderCountries = function (data) {
  // This represents the country object

  parentEl.innerHTML = "";

  data.forEach(country => {
    const countryData = {
      flag: country.flags.png,
      name: country.name,
      population: country.population,
      region: country.region,
      capital: country.capital,
    };

    const markup = `
  
     <div class="country">
              <div class="img-cont h-[15rem]">
                <img
                  src="${countryData.flag}"
                  alt="${countryData.name}"
                  class="h-full w-full"
                />
              </div>

              <ul class="card-details-cont">
                <li class="card-head"><a href="#">${countryData.name}</a></li>
                <li class="card-txt">
                  <span>Population :</span>
                  <span class="value">${countryData.population}</span>
                </li>
                <li class="card-txt">
                  <span>Region :</span>
                  <span class="value">${countryData.region}</span>
                </li>
                <li class="card-txt">
                  <span>Capital :</span>
                  <span class="value">${countryData.capital}</span>
                </li>
              </ul>
            </div>
  
  
  `;

    parentEl.insertAdjacentHTML("afterbegin", markup);
  });
};

const splittedData = data.slice(1, 12);
// renderCountries(splittedData);

// Handling search results of a given country
const getCountry = async function (name) {
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  const [data] = await response.json();
  //   console.log(data);
  return data;
};
// getCountry("kenya");

// Rendering the given country

const renderCountry = async function (val) {
  const dt = await getCountry(`${val}`);
  console.log(dt);

  const countryData = {
    flag: dt.flags.png,
    name: dt.name.common,
    population: dt.population,
    region: dt.region,
    capital: dt.capital,
  };

  parentEl.innerHTML = "";

  const markup = `
  
     <div class="country">
              <div class="img-cont h-[15rem]">
                <img
                  src="${countryData.flag}"
                  alt="${countryData.name}"
                  class="h-full w-full"
                />
              </div>

              <ul class="card-details-cont">
                <li class="card-head"><a href="#">${countryData.name}</a></li>
                <li class="card-txt">
                  <span>Population :</span>
                  <span class="value">${countryData.population}</span>
                </li>
                <li class="card-txt">
                  <span>Region :</span>
                  <span class="value">${countryData.region}</span>
                </li>
                <li class="card-txt">
                  <span>Capital :</span>
                  <span class="value">${countryData.capital}</span>
                </li>
              </ul>
            </div>
  
  
  `;

  parentEl.insertAdjacentHTML("afterbegin", markup);
};

const getValue = function () {
  const searchValue = document.querySelector(".search-input");
  let val;
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    val = searchValue.value;
    console.log(searchValue.value);
    searchValue.value = "";
    console.log("form has been submitted");

    renderCountry(val);
  });
};
getValue();
