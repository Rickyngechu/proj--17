// This will be the markup for fully rendered country
const returnBorderStr = function (data) {
  // Check if the country name is an array
  if (!Array.isArray(data.border)) {
    return `<b class="border-link">${data.border}</b>`;
  } else if (data.border.length > 1) {
    return data.border.map(bd => `<b class="border-link">${bd}</b>`).join(" ");
  } else {
    return "";
  }
};

export const markupFullCountry = function (data) {
  let markup;
  return (markup = `
      <div class="cont max-w-[100rem] w-[90%] mx-auto">
        <a href="index.html" class="back-link mt-14 inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon inline-block"
            viewBox="0 0 512 512"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="48"
              d="M244 400L100 256l144-144M120 256h292"
            />
          </svg>
          <span class="text-Dark-Blue dark:text-White">Back</span></a
        >
        <div class="ct">
          <div class="full-country mt-28">
            <div class="c-cont md:flex md:justify-between  ">
              <div class="imgCountry bg-White dark:bg-Very-Dark-Blue2  md:w-[50%]">
                <img src="${data.flag}" alt="Kenya" class="w-full h-full " />
              </div>
              <div class="content p-10">
                <h2
                  class="country-header font-extrabold text-4xl mb-8 text-Dark-Blue dark:text-White"
                >
                 ${data.cName}
                </h2>
                <ul classs="md:w-[50%]">
                  <div class="ct flex justify-between flex-wrap gap-5">
                    <div class="items-1">
                      <li class="country-txt">
                        <span>Native Name :</span>
                        <span class="value">${data.cName}</span>
                      </li>
                      <li class="country-txt">
                        <span>Population :</span>
                        <span class="value">${data.population}</span>
                      </li>
                      <li class="country-txt">
                        <span>Region :</span> <span class="value">${
                          data.region
                        }</span>
                      </li>
                      <li class="country-txt" class="country-txt">
                        <span>Subregion :</span>
                        <span class="value">${data.subregion}</span>
                      </li>
                      <li class="country-txt">
                        <span>Capital :</span>
                        <span class="value">${data.capital}</span>
                      </li>
                    </div>
                    <div class="items-2">
                      <li class="country-txt">
                        <span>Top level Domain :</span>
                        <span class="value">${data.topleveldomain}</span>
                      </li>
                      <li class="country-txt">
                        <span>Currencies :</span>
                        <span class="value">${data.currency}</span>
                      </li>
                      <li class="country-txt">
                        <span>Languages :</span>
                        <span class="value">${data.language}</span>
                      </li>
                    </div>
                  </div>


                  <div class="bd mt-24">
                    <li class="country-txt">
                      <span class="inline-block md:mr-10 md:mb-5">Border countries:</span>
                      <span class="flex gap-3 flex-wrap">
                 
                     ${returnBorderStr(data)}

                      </span>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  `);
};
