(()=>{let a=localStorage.getItem("theme"),t=window.matchMedia("(prefers-color-scheme: dark)").matches,e=async function(a){try{let t=a?`https://restcountries.com/v3.1/name/${a}`:"https://restcountries.com/v3.1/all",e=await fetch(t);return await e.json()}catch(a){alert(`Something went wrong \u{1F611}`),location.reload()}},n=async function(a){try{let t=await fetch(`https://restcountries.com/v3.1/region/${a}`);return await t.json()}catch(a){alert(`Something went wrong \u{1F611}`),location.reload()}},s=async function(...a){try{let t=await fetch(`https://restcountries.com/v3.1/alpha?codes=${a}`);return await t.json()}catch(a){alert(`Something went wrong \u{1F611}`),location.reload()}},l=function(a){return`

     <div class="country">
              <div class="img-cont h-[12rem]">
                <img
                  src="${a.flag}"
                  alt="${a.name}"
                  class="h-full w-full"
                />
              </div>

              <ul class="card-details-cont">
                <li class="card-head cursor-pointer">${a.name}</li>
                <li class="card-txt">
                  <span>Population :</span>
                  <span class="value">${a.population}</span>
                </li>
                <li class="card-txt">
                  <span>Region :</span>
                  <span class="value">${a.region}</span>
                </li>
                <li class="card-txt">
                  <span>Capital :</span>
                  <span class="value">${a.capital}</span>
                </li>
              </ul>
            </div>

  `},c=document.querySelector(".countries-container"),o=async function(){let a=await e();c.innerHTML="",a.forEach(a=>{let t=l({flag:a.flags.png,name:a.name.common,population:a.population.toLocaleString(),region:a.region,capital:a.capital});document.querySelector(".countries-container").insertAdjacentHTML("afterbegin",t)})},i=async function(a){try{let[t]=await e(a),n={flag:t.flags.png,name:t.name.common,population:t.population.toLocaleString(),region:t.region,capital:t.capital};c.innerHTML="";let s=l(n);c.insertAdjacentHTML("afterbegin",s)}catch(a){alert(`Something went wrong \u{1F611}`),location.reload()}},r=async function(a){let t=await n(a);c.innerHTML="",t.forEach(a=>{let t=l({flag:a.flags.png,name:a.name.common,population:a.population.toLocaleString(),region:a.region,capital:a.capital});document.querySelector(".countries-container").insertAdjacentHTML("afterbegin",t)})},u=async function(a){var t;let n;let l=document.querySelector(".main-content"),[c]=await e(a),o=await s(c.borders);l.innerHTML="",n=1===o.length?o[0].name.common:o.map(a=>a.name.common);let[i]=Object.values(c.currencies),r=(t={flag:c.flags.png,cName:c.name.common,population:c.population.toLocaleString(),region:c.region,subregion:c.subregion,topLevelDomain:c.tld,currency:i.name,language:Object.entries(c.languages)[0],capital:c.capital,border:n},`
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
                <img src="${t.flag}" alt="Kenya" class="w-full h-full " />
              </div>
              <div class="content p-10">
                <h2
                  class="country-header font-extrabold text-4xl mb-8 text-Dark-Blue dark:text-White"
                >
                 ${t.cName}
                </h2>
                <ul classs="md:w-[50%]">
                  <div class="ct flex justify-between flex-wrap gap-5">
                    <div class="items-1">
                      <li class="country-txt">
                        <span>Native Name :</span>
                        <span class="value">${t.cName}</span>
                      </li>
                      <li class="country-txt">
                        <span>Population :</span>
                        <span class="value">${t.population}</span>
                      </li>
                      <li class="country-txt">
                        <span>Region :</span> <span class="value">${t.region}</span>
                      </li>
                      <li class="country-txt" class="country-txt">
                        <span>Subregion :</span>
                        <span class="value">${t.subregion}</span>
                      </li>
                      <li class="country-txt">
                        <span>Capital :</span>
                        <span class="value">${t.capital}</span>
                      </li>
                    </div>
                    <div class="items-2">
                      <li class="country-txt">
                        <span>Top level Domain :</span>
                        <span class="value">${t.topleveldomain}</span>
                      </li>
                      <li class="country-txt">
                        <span>Currencies :</span>
                        <span class="value">${t.currency}</span>
                      </li>
                      <li class="country-txt">
                        <span>Languages :</span>
                        <span class="value">${t.language}</span>
                      </li>
                    </div>
                  </div>


                  <div class="bd mt-24">
                    <li class="country-txt">
                      <span class="inline-block md:mr-10 md:mb-5">Border countries:</span>
                      <span class="flex gap-3 flex-wrap">
                 
                     ${Array.isArray(t.border)?t.border.length>1?t.border.map(a=>`<b class="border-link">${a}</b>`).join(" "):"":`<b class="border-link">${t.border}</b>`}

                      </span>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  `);document.querySelector(".main-content").insertAdjacentHTML("afterbegin",r)};document.querySelector(".theme-toggle").addEventListener("click",()=>{if(document.documentElement.classList.contains("dark")){document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light");return}document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")}),("dark"===a||!a&&t)&&document.documentElement.classList.add("dark"),o(),document.querySelector(".form").addEventListener("submit",function(a){a.preventDefault(),i(document.querySelector(".search-input").value),document.querySelector(".search-input").value=""}),document.querySelector(".items-cont").addEventListener("click",async function(a){let t;a.target.classList.contains("opt")&&(t=a.target.textContent),r(t)}),document.querySelector(".countries-container").addEventListener("click",async function(a){let t;a.target.classList.contains("card-head")&&(t=a.target.textContent),u(t)})})();
//# sourceMappingURL=script.js.map
