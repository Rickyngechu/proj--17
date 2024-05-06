// this is the markup for the country
export const countryMarkup = function (data) {
  let markuphtml;
  return (markuphtml = `

     <div class="country">
              <div class="img-cont h-[12rem]">
                <img
                  src="${data.flag}"
                  alt="${data.name}"
                  class="h-full w-full"
                />
              </div>

              <ul class="card-details-cont">
                <li class="card-head cursor-pointer">${data.name}</li>
                <li class="card-txt">
                  <span>Population :</span>
                  <span class="value">${data.population}</span>
                </li>
                <li class="card-txt">
                  <span>Region :</span>
                  <span class="value">${data.region}</span>
                </li>
                <li class="card-txt">
                  <span>Capital :</span>
                  <span class="value">${data.capital}</span>
                </li>
              </ul>
            </div>

  `);
};
