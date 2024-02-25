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

// Rendering all countries
const renderCountries = function (data) {
  // Clear out the parent Element
  parentEl.innerHTML = "";

  data.forEach(country => {
    // This represents the country object
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
                <li class="card-head"><a href="index" class="country-link">${countryData.name}</a></li>
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

    document
      .querySelector(".countries-container")
      .insertAdjacentHTML("afterbegin", markup);
  });
};
renderCountries(data);

// Handling search results of a given country
const getCountry = async function (name) {
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  const [data] = await response.json();
  //   console.log(data);
  return data;
};

let countryName;

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
                <li class="card-head"><a href="index.html" class="country-link">${countryData.name}</a></li>
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

  document
    .querySelector(".country-link")
    .addEventListener("click", function (e) {
      // e.preventDefault();
      countryName = e.target.innerHTML;
      console.log(countryName);
    });
};

// Rendering full country data
const renderFullcountry = async function (cName) {
  const finalD = await fetch(`https://restcountries.com/v3.1/name/${cName}`);
  const [data] = await finalD.json();
  const dt = data;
  const fullCountryData = {
    flag: dt.flags.png,
    name: dt.name.common,
    native: dt.name.nativeName.eng,
    subreg: dt.subregion,
    toplevelDomain: dt.tld,
    currency: dt.currencies,
    languages: dt.languages,
    population: dt.population,
    region: dt.region,
    capital: dt.capital,
  };

  const markup = `
   <div class="full-country mt-28">
          <div class="c-cont grid grid-cols-country-details gap-32">
            <div class="img bg-White dark:bg-Very-Dark-Blue2">
              <img src="${fullCountryData.flag}" alt="${fullCountryData.name}" class="w-full" />
            </div>
            <div class="content p-10">
              <h2
                class="country-header font-extrabold text-4xl mb-8 text-Dark-Blue dark:text-White"
              >
                ${fullCountryData.name}
              </h2>
              <ul>
                <div class="ct flex justify-between flex-wrap gap-5">
                  <div class="items-1">
                    <li class="country-txt">
                      <span>Native Name :</span>
                      <span class="value">   ${fullCountryData.native}</span>
                    </li>
                    <li class="country-txt">
                      <span>Population :</span>
                      <span class="value">   ${fullCountryData.population}</span>
                    </li>
                    <li class="country-txt">
                      <span>Region :</span> <span class="value">${fullCountryData.region}</span>
                    </li>
                    <li class="country-txt" class="country-txt">
                      <span>Subregion :</span>
                      <span class="value">${fullCountryData.subreg}</span>
                    </li>
                    <li class="country-txt">
                      <span>Capital :</span> <span class="value">${fullCountryData.capital}</span>
                    </li>
                  </div>
                  <div class="items-2">
                    <li class="country-txt">
                      <span>Top level Domain :</span>
                      <span class="value">${fullCountryData.toplevelDomain}</span>
                    </li>
                    <li class="country-txt">
                      <span>Currencies :</span> <span class="value">${fullCountryData.currency}</span>
                    </li>
                    <li class="country-txt">
                      <span>Languages :</span>
                      <span class="value">${fullCountryData.languages}</span>
                    </li>
                  </div>
                </div>

                <div class="bd mt-24">
                  <li class="country-txt">
                    <span class="inline-block">Border countries :</span>
                    <span class="inline-block">
                      <a href="#" class="border-link">Uganda</a>
                      <a href="#" class="border-link">Tanzania</a>
                      <a href="#" class="border-link">Sudan</a>
                    </span>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
    
    `;
  document.querySelector(".ct").insertAdjacentHTML("afterbegin", markup);
};

const getValue = function () {
  const searchValue = document.querySelector(".search-input");
  let val;
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    val = searchValue.value;
    searchValue.value = "";

    renderCountry(val);
  });
};
getValue();
