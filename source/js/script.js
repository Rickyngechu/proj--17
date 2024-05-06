"use strict";
import { themeSwitch, themeCheck } from "./themeChanger.js";
import {
  renderCountries,
  renderCountry,
  renderCountriesByRegion,
  renderFullcountry,
} from "./renderCountries.js";

const themeBtn = document.querySelector(".theme-toggle");

/**Change theme dark/light */
themeBtn.addEventListener("click", themeSwitch);
themeCheck();

/**RENDER ALL COUNTRIES BY DEFAULT PAGE RELOAD */
renderCountries();

/**RENDER ONE COUNTRY */
const form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // Get the searched item
  const countryVal = document.querySelector(".search-input").value;

  // Render the country on the page
  renderCountry(countryVal);

  // Empty out the input form field
  document.querySelector(".search-input").value = "";
});

/**RENDER COUNTRIES BASED ON THE SELECTED FILTER ITEM */
const parentEl2 = document.querySelector(".items-cont");
parentEl2.addEventListener("click", async function (e) {
  // Receive and select the item from the form NB NO VALIDATION HAS BEEN PERFORMED YET!!!
  let filterVal;
  if (e.target.classList.contains("opt")) {
    filterVal = e.target.textContent;
  }

  // Render the countries based on the selected filter item
  renderCountriesByRegion(filterVal);
});

/**RENDER FULL PAGE ON A SEPARATE COUNTRY */
const parentEl1 = document.querySelector(".countries-container");
parentEl1.addEventListener("click", async function (e) {
  let country;
  if (e.target.classList.contains("card-head")) {
    country = e.target.textContent;
  }

  // Render the full country
  renderFullcountry(country);
});
