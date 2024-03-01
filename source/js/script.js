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

const options = document.querySelector(".select-field");

const parentEl1 = document.querySelector(".countries-container");
const parentEl2 = document.querySelector(".ct");

// Rendering all countries
if (parentEl1) {
  const renderCountries = function (data) {
    console.log(data);
    // Clear out the parent Element
    parentEl1.innerHTML = "";

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
                <li class="card-head"><a href="" class="country-link">${countryData.name}</a></li>
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
}

const country = document.querySelector(".country");
country.addEventListener("click", function (e) {
  console.log(e.target);
  let link;
  if (e.target.classList.contains("country-link")) {
    link = e.target;
  }
  console.log(link);
});

// Only display countries based on the selected value
const updateRenderCountries = function (data) {
  // Clear out the parent Element
  document.querySelector(".countries-container").innerHTML = "";

  const filtered = data.filter(ct => ct.region === outpVal);
  filtered.forEach(country => {
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
                <li class="card-head"><a href="" class="country-link">${countryData.name}</a></li>
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

let outpVal;
if (options)
  options.addEventListener("click", function (e) {
    const selectElement = document.querySelector("#location");

    if (selectElement.value !== "Null") outpVal = selectElement.value;

    updateRenderCountries(data);
  });

// Handling search results of a given country
const getCountry = async function (name) {
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  const [data] = await response.json();
  //   console.log(data);
  return data;
};

let countryName;

const renderCountry = async function (val) {
  try {
    const dt = await getCountry(`${val}`);
    console.log(dt);

    const countryData = {
      flag: dt.flags.png,
      name: dt.name.common,
      population: dt.population,
      region: dt.region,
      capital: dt.capital,
    };

    parentEl1.innerHTML = "";
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
                <li class="card-head"><a href="country.html" class="country-link">${countryData.name}</a></li>
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
    parentEl1.insertAdjacentHTML("afterbegin", markup);
  } catch (err) {
    alert(err);
    console.log(err);
  }
};

// Rendering full country data
const renderFullcountry = async function (cName) {
  try {
    const finalD = await fetch(`https://restcountries.com/v3.1/name/${cName}`);
    const [data] = await finalD.json();
    const dt = data;

    // parentEl2.innerHTML = "";
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
    parentEl2.insertAdjacentHTML("afterbegin", markup);
  } catch (err) {
    alert(err);
    console.log(err);
  }
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

if (parentEl1) getValue();
