var e,t,n,r;t={},n={},null==(r=(e=globalThis).parcelRequire0ace)&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequire0ace=r),(0,r.register)("crhGx",function(t,n){!function(n,r,o,a,l){var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:{},i="function"==typeof s[a]&&s[a],c=i.cache||{},u="function"==typeof t.require&&t.require.bind(t);function d(e,t){if(!c[e]){if(!n[e]){var r="function"==typeof s[a]&&s[a];if(!t&&r)return r(e,!0);if(i)return i(e,!0);if(u&&"string"==typeof e)return u(e);var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}p.resolve=function(t){var r=n[e][1][t];return null!=r?r:t},p.cache={};var l=c[e]=new d.Module(e);n[e][0].call(l.exports,p,l,l.exports,this)}return c[e].exports;function p(e){var t=p.resolve(e);return!1===t?{}:d(t)}}d.isParcelRequire=!0,d.Module=function(e){this.id=e,this.bundle=d,this.exports={}},d.modules=n,d.cache=c,d.parent=i,d.register=function(e,t){n[e]=[function(e,n){n.exports=t},{}]},Object.defineProperty(d,"root",{get:function(){return s[a]}}),s[a]=d;for(var p=0;p<r.length;p++)d(r[p]);if(o){var f=d(o);t.exports=f}}({aSWxB:[function(e,t,n){var r=arguments[3];t.bundle.HMR_BUNDLE_ID="235b23c89b56825a";var o="__parcel__error__overlay__",a=t.bundle.Module;function l(){return 0===location.protocol.indexOf("http")?location.hostname:"localhost"}t.bundle.Module=function(e){a.call(this,e),this.hot={data:t.bundle.hotData[e],_acceptCallbacks:[],_disposeCallbacks:[],accept:function(e){this._acceptCallbacks.push(e||function(){})},dispose:function(e){this._disposeCallbacks.push(e)}},t.bundle.hotData[e]=void 0},t.bundle.hotData={};var s=t.bundle.parent;if((!s||!s.isParcelRequire)&&"undefined"!=typeof WebSocket){var i,c,u,d,p=l(),f="https:"!=location.protocol||["localhost","127.0.0.1","0.0.0.0"].includes(p)?"ws":"wss";try{d=new WebSocket(f+"://"+p+":1234/")}catch(e){e.message&&console.error(e.message),d={}}var m="undefined"==typeof browser?"undefined"==typeof chrome?null:chrome:browser,h=!1;try{(0,eval)('throw new Error("test"); //# sourceURL=test.js')}catch(e){h=e.stack.includes("test.js")}d.onmessage=async function(e){i={},u=[],c=[];var n=JSON.parse(e.data);if("update"===n.type){"undefined"!=typeof document&&g();let e=n.assets.filter(e=>"d6ea1d42532a7575"===e.envHash);if(e.every(e=>"css"===e.type||"js"===e.type&&x(t.bundle.root,e.id,e.depsByBundle))){console.clear(),"undefined"!=typeof window&&"undefined"!=typeof CustomEvent&&window.dispatchEvent(new CustomEvent("parcelhmraccept")),await b(e);let n={};for(let e=0;e<c.length;e++){let t=c[e][1];n[t]||(k(c[e][0],t),n[t]=!0)}n={};for(let e=0;e<u.length;e++){let r=u[e][1];n[r]||(function(e,n){e(n);var r=e.cache[n];r&&r.hot&&r.hot._acceptCallbacks.length&&r.hot._acceptCallbacks.forEach(function(e){var r=e(function(){return v(t.bundle.root,n)});r&&u.length&&(r.forEach(function(e){k(e[0],e[1])}),u.push.apply(u,r))})}(u[e][0],r),n[r]=!0)}}else"reload"in location?location.reload():m&&m.runtime&&m.runtime.reload&&m.runtime.reload()}if("error"===n.type){for(let e of n.diagnostics.ansi){let t=e.codeframe?e.codeframe:e.stack;console.error("\uD83D\uDEA8 [parcel]: "+e.message+"\n"+t+"\n\n"+e.hints.join("\n"))}if("undefined"!=typeof document){g();var r=function(e){var t=document.createElement("div");t.id=o;let n='<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';for(let t of e){let e=t.frames.length?t.frames.reduce((e,t)=>`${e}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(t.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${t.location}</a>
${t.code}`,""):t.stack;n+=`
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${t.message}
        </div>
        <pre>${e}</pre>
        <div>
          ${t.hints.map(e=>"<div>\uD83D\uDCA1 "+e+"</div>").join("")}
        </div>
        ${t.documentation?`<div>\u{1F4DD} <a style="color: violet" href="${t.documentation}" target="_blank">Learn more</a></div>`:""}
      </div>
    `}return n+="</div>",t.innerHTML=n,t}(n.diagnostics.html);document.body.appendChild(r)}}},d instanceof WebSocket&&(d.onerror=function(e){e.message&&console.error(e.message)},d.onclose=function(){console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost")})}function g(){var e=document.getElementById(o);e&&(e.remove(),console.log("[parcel] ✨ Error resolved"))}function v(e,t){var n,r,o,a=e.modules;if(!a)return[];var l=[];for(n in a)for(r in a[n][1])((o=a[n][1][r])===t||Array.isArray(o)&&o[o.length-1]===t)&&l.push([e,n]);return e.parent&&(l=l.concat(v(e.parent,t))),l}var y=null;async function b(e){let n;r.parcelHotUpdate=Object.create(null);try{if(!h){let t=e.map(e=>{var t;return null===(t=function(e){if("js"===e.type){if("undefined"!=typeof document){let t=document.createElement("script");return t.src=e.url+"?t="+Date.now(),"esmodule"===e.outputFormat&&(t.type="module"),new Promise((e,n)=>{var r;t.onload=()=>e(t),t.onerror=n,null===(r=document.head)||void 0===r||r.appendChild(t)})}if("function"==typeof importScripts)return"esmodule"===e.outputFormat?import(e.url+"?t="+Date.now()):new Promise((t,n)=>{try{importScripts(e.url+"?t="+Date.now()),t()}catch(e){n(e)}})}}(e))||void 0===t?void 0:t.catch(e=>{if(m&&m.runtime&&3==m.runtime.getManifest().manifest_version&&"undefined"!=typeof ServiceWorkerGlobalScope&&r instanceof ServiceWorkerGlobalScope){m.runtime.reload();return}throw e})});n=await Promise.all(t)}e.forEach(function(e){(function e(n,o){var a=n.modules;if(a){if("css"===o.type)y||(y=setTimeout(function(){for(var e=document.querySelectorAll('link[rel="stylesheet"]'),t=0;t<e.length;t++){var n=e[t].getAttribute("href"),r=l(),o="localhost"===r?RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):1234").test(n):n.indexOf(r+":1234");/^https?:\/\//i.test(n)&&0!==n.indexOf(location.origin)&&!o||function(e){var t=e.getAttribute("href");if(t){var n=e.cloneNode();n.onload=function(){null!==e.parentNode&&e.parentNode.removeChild(e)},n.setAttribute("href",t.split("?")[0]+"?"+Date.now()),e.parentNode.insertBefore(n,e.nextSibling)}}(e[t])}y=null},50));else if("js"===o.type){let l=o.depsByBundle[n.HMR_BUNDLE_ID];if(l){if(a[o.id]){let e=a[o.id][1];for(let n in e)if(!l[n]||l[n]!==e[n]){let r=e[n];1===v(t.bundle.root,r).length&&function e(n,r){let o=n.modules;if(o){if(o[r]){let a=o[r][1],l=[];for(let e in a)1===v(t.bundle.root,a[e]).length&&l.push(a[e]);delete o[r],delete n.cache[r],l.forEach(n=>{e(t.bundle.root,n)})}else n.parent&&e(n.parent,r)}}(t.bundle.root,r)}}h&&(0,eval)(o.output);let e=r.parcelHotUpdate[o.id];a[o.id]=[e,l]}else n.parent&&e(n.parent,o)}}})(t.bundle.root,e)})}finally{delete r.parcelHotUpdate,n&&n.forEach(e=>{if(e){var t;null===(t=document.head)||void 0===t||t.removeChild(e)}})}}function x(e,n,r){if(w(e,n,r))return!0;let o=v(t.bundle.root,n),a=!1;for(;o.length>0;){let e=o.shift();if(w(e[0],e[1],null))a=!0;else{let n=v(t.bundle.root,e[1]);if(0===n.length){a=!1;break}o.push(...n)}}return a}function w(e,t,n){if(e.modules){if(n&&!n[e.HMR_BUNDLE_ID])return!e.parent||x(e.parent,t,n);if(i[t])return!0;i[t]=!0;var r=e.cache[t];if(c.push([e,t]),!r||r.hot&&r.hot._acceptCallbacks.length)return u.push([e,t]),!0}}function k(e,t){var n=e.cache[t];e.hotData[t]={},n&&n.hot&&(n.hot.data=e.hotData[t]),n&&n.hot&&n.hot._disposeCallbacks.length&&n.hot._disposeCallbacks.forEach(function(n){n(e.hotData[t])}),delete e.cache[t]}},{}],fqboi:[function(e,t,n){var r=e("./themeChanger.js"),o=e("./renderCountries.js");document.querySelector(".theme-toggle").addEventListener("click",r.themeSwitch),(0,r.themeCheck)(),(0,o.renderCountries)(),document.querySelector(".form").addEventListener("submit",function(e){e.preventDefault();let t=document.querySelector(".search-input").value;(0,o.renderCountry)(t),document.querySelector(".search-input").value=""}),document.querySelector(".items-cont").addEventListener("click",async function(e){let t;e.target.classList.contains("opt")&&(t=e.target.textContent),(0,o.renderCountriesByRegion)(t)}),document.querySelector(".countries-container").addEventListener("click",async function(e){let t;e.target.classList.contains("card-head")&&(t=e.target.textContent),(0,o.renderFullcountry)(t)})},{"./themeChanger.js":"kYI5v","./renderCountries.js":"2pvgd"}],kYI5v:[function(e,t,n){var r=e("@parcel/transformer-js/src/esmodule-helpers.js");r.defineInteropFlag(n),r.export(n,"themeCheck",()=>l),r.export(n,"themeSwitch",()=>s);let o=localStorage.getItem("theme"),a=window.matchMedia("(prefers-color-scheme: dark)").matches,l=()=>{("dark"===o||!o&&a)&&document.documentElement.classList.add("dark")},s=()=>{if(document.documentElement.classList.contains("dark")){document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light");return}document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark")}},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],gkKU3:[function(e,t,n){n.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},n.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.exportAll=function(e,t){return Object.keys(e).forEach(function(n){"default"===n||"__esModule"===n||Object.prototype.hasOwnProperty.call(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:function(){return e[n]}})}),t},n.export=function(e,t,n){Object.defineProperty(e,t,{enumerable:!0,get:n})}},{}],"2pvgd":[function(e,t,n){var r=e("@parcel/transformer-js/src/esmodule-helpers.js");r.defineInteropFlag(n),r.export(n,"renderCountries",()=>i),r.export(n,"renderCountry",()=>c),r.export(n,"renderCountriesByRegion",()=>u),r.export(n,"renderFullcountry",()=>d);var o=e("./fetchCountryApi.js"),a=e("./countryMarkup.js"),l=e("./FullCountryMarkup.js");let s=document.querySelector(".countries-container"),i=async function(){let e=await (0,o.getCountriesAPI)();s.innerHTML="",e.forEach(e=>{let t={flag:e.flags.png,name:e.name.common,population:e.population.toLocaleString(),region:e.region,capital:e.capital},n=(0,a.countryMarkup)(t);document.querySelector(".countries-container").insertAdjacentHTML("afterbegin",n)})},c=async function(e){try{let[t]=await (0,o.getCountriesAPI)(e),n={flag:t.flags.png,name:t.name.common,population:t.population.toLocaleString(),region:t.region,capital:t.capital};s.innerHTML="";let r=(0,a.countryMarkup)(n);s.insertAdjacentHTML("afterbegin",r)}catch(e){alert(`Something went wrong \u{1F611}`),location.reload()}},u=async function(e){let t=await (0,o.getCountryByRegion)(e);s.innerHTML="",t.forEach(e=>{let t={flag:e.flags.png,name:e.name.common,population:e.population.toLocaleString(),region:e.region,capital:e.capital},n=(0,a.countryMarkup)(t);document.querySelector(".countries-container").insertAdjacentHTML("afterbegin",n)})},d=async function(e){let t;let n=document.querySelector(".main-content"),[r]=await (0,o.getCountriesAPI)(e),a=await (0,o.getcountryNamesByCode)(r.borders);n.innerHTML="",t=1===a.length?a[0].name.common:a.map(e=>e.name.common);let[s]=Object.values(r.currencies),i={flag:r.flags.png,cName:r.name.common,population:r.population.toLocaleString(),region:r.region,subregion:r.subregion,topLevelDomain:r.tld,currency:s.name,language:Object.entries(r.languages)[0],capital:r.capital,border:t},c=(0,l.markupFullCountry)(i);document.querySelector(".main-content").insertAdjacentHTML("afterbegin",c)}},{"./fetchCountryApi.js":"8JHUf","./countryMarkup.js":"3jZL9","./FullCountryMarkup.js":"a7XJW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8JHUf":[function(e,t,n){var r=e("@parcel/transformer-js/src/esmodule-helpers.js");r.defineInteropFlag(n),r.export(n,"getCountriesAPI",()=>o),r.export(n,"getCountryByRegion",()=>a),r.export(n,"getcountryNamesByCode",()=>l);let o=async function(e){try{let t=e?`https://restcountries.com/v3.1/name/${e}`:"https://restcountries.com/v3.1/all",n=await fetch(t);return await n.json()}catch(e){alert(`Something went wrong \u{1F611}`),location.reload()}},a=async function(e){try{let t=await fetch(`https://restcountries.com/v3.1/region/${e}`);return await t.json()}catch(e){alert(`Something went wrong \u{1F611}`),location.reload()}},l=async function(...e){try{let t=await fetch(`https://restcountries.com/v3.1/alpha?codes=${e}`);return await t.json()}catch(e){alert(`Something went wrong \u{1F611}`),location.reload()}}},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3jZL9":[function(e,t,n){var r=e("@parcel/transformer-js/src/esmodule-helpers.js");r.defineInteropFlag(n),r.export(n,"countryMarkup",()=>o);let o=function(e){return`

     <div class="country">
              <div class="img-cont h-[12rem]">
                <img
                  src="${e.flag}"
                  alt="${e.name}"
                  class="h-full w-full"
                />
              </div>

              <ul class="card-details-cont">
                <li class="card-head cursor-pointer">${e.name}</li>
                <li class="card-txt">
                  <span>Population :</span>
                  <span class="value">${e.population}</span>
                </li>
                <li class="card-txt">
                  <span>Region :</span>
                  <span class="value">${e.region}</span>
                </li>
                <li class="card-txt">
                  <span>Capital :</span>
                  <span class="value">${e.capital}</span>
                </li>
              </ul>
            </div>

  `}},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],a7XJW:[function(e,t,n){var r=e("@parcel/transformer-js/src/esmodule-helpers.js");r.defineInteropFlag(n),r.export(n,"markupFullCountry",()=>o);let o=function(e){return`
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
                <img src="${e.flag}" alt="Kenya" class="w-full h-full " />
              </div>
              <div class="content p-10">
                <h2
                  class="country-header font-extrabold text-4xl mb-8 text-Dark-Blue dark:text-White"
                >
                 ${e.cName}
                </h2>
                <ul classs="md:w-[50%]">
                  <div class="ct flex justify-between flex-wrap gap-5">
                    <div class="items-1">
                      <li class="country-txt">
                        <span>Native Name :</span>
                        <span class="value">${e.cName}</span>
                      </li>
                      <li class="country-txt">
                        <span>Population :</span>
                        <span class="value">${e.population}</span>
                      </li>
                      <li class="country-txt">
                        <span>Region :</span> <span class="value">${e.region}</span>
                      </li>
                      <li class="country-txt" class="country-txt">
                        <span>Subregion :</span>
                        <span class="value">${e.subregion}</span>
                      </li>
                      <li class="country-txt">
                        <span>Capital :</span>
                        <span class="value">${e.capital}</span>
                      </li>
                    </div>
                    <div class="items-2">
                      <li class="country-txt">
                        <span>Top level Domain :</span>
                        <span class="value">${e.topleveldomain}</span>
                      </li>
                      <li class="country-txt">
                        <span>Currencies :</span>
                        <span class="value">${e.currency}</span>
                      </li>
                      <li class="country-txt">
                        <span>Languages :</span>
                        <span class="value">${e.language}</span>
                      </li>
                    </div>
                  </div>


                  <div class="bd mt-24">
                    <li class="country-txt">
                      <span class="inline-block md:mr-10 md:mb-5">Border countries:</span>
                      <span class="flex gap-3 flex-wrap">
                 
                     ${Array.isArray(e.border)?e.border.length>1?e.border.map(e=>`<b class="border-link">${e}</b>`).join(" "):"":`<b class="border-link">${e.border}</b>`}

                      </span>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  `}},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["aSWxB","fqboi"],"fqboi","parcelRequire0ace")}),r("crhGx");
//# sourceMappingURL=script.js.map
