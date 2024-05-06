/**This is the refactored get countries function for REST COUNTRIES API */
export const getCountriesAPI = async function (val) {
  try {
    const fetchUrl = val
      ? `https://restcountries.com/v3.1/name/${val}`
      : "https://restcountries.com/v3.1/all";
    const response = await fetch(fetchUrl);
    const data = await response.json();

    return data;
  } catch (err) {
    alert(`Something went wrong 😑`);
    location.reload();
  }
};

// Getting countries by region
export const getCountryByRegion = async function (region) {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/region/${region}`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    alert(`Something went wrong 😑`);
    location.reload();
  }
};

// Getting country by codes
export const getcountryNamesByCode = async function (...codes) {
  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/alpha?codes=${codes}`
    );
    const data = await res.json();

    return data;
  } catch (err) {
    alert(`Something went wrong 😑`);
    location.reload();
  }
};
