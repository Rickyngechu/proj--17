import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";

function CountryPage() {
  const { country } = useParams();
  const navigate = useNavigate();
  const [countryDetails, setCountriesDetails] = useState({});
  const [codesName, setCodesName] = useState();

  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = countryDetails;

  useEffect(
    function () {
      async function fetchCountryDetails() {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${country}`
        );
        const data = await res.json();
        setCountriesDetails(data[0]);
      }
      fetchCountryDetails();
    },
    [country]
  );

  useEffect(
    function () {
      if (!borders) return;
      async function getCountriesByCode() {
        try {
          const res = await fetch(
            `https://restcountries.com/v3.1/alpha?codes=${borders.join(",")}`
          );

          const data = await res.json();
          setCodesName(data);
        } catch (err) {
        } finally {
        }
      }
      getCountriesByCode();
    },
    [borders]
  );

  if (Object.keys(countryDetails).length === 0) return <Loader />;
  console.log(name.nativeName[Object.keys(languages)[0]].common);
  return (
    <div className="dark:bg-Very-Dark-Blue">
      <div className="cont max-w-7xl w-[90%] mx-auto py-12 h-screen">
        <div className="">
          <button
            className="py-2 px-6 flex items-center gap-2 dark:bg-Dark-Blue bg-white  dark:text-white border dark:border-transparent border-black rounded-md"
            onClick={() => navigate("/")}
          >
            &larr; Back
          </button>
        </div>

        <div className="grid grid-cols-2 gap-12 mt-14">
          <div className="">
            <img src={flags.png} alt={"img"} className="w-full h-full" />
          </div>
          <div className="self-center">
            <h1 className="text-2xl font-extrabold mb-2 dark:text-white text-black">
              {name.common || ""}
            </h1>
            <div className="flex  gap-4 dark:text-white text-black">
              <ul>
                <li>
                  Native Name:
                  <b className="dark:text-Dark-Gray text-black">
                    {name.nativeName[Object.keys(languages)[0]].common || ""}
                  </b>
                </li>
                <li>
                  Population:
                  <b className="dark:text-Dark-Gray text-black">
                    {population.toLocaleString()}
                  </b>
                </li>
                <li>
                  Region:
                  <b className="dark:text-Dark-Gray text-black"> {region}</b>
                </li>
                <li>
                  Subregion:
                  <b className="dark:text-Dark-Gray text-black">
                    {subregion ? subregion : "None"}
                  </b>
                </li>
                <li>
                  Capital:
                  <b className="dark:text-Dark-Gray text-black"> {[capital]}</b>
                </li>
              </ul>
              <ul>
                <li>
                  Top Level Domain:
                  <b className="dark:text-Dark-Gray text-black"> {[tld]}</b>
                </li>
                <li>
                  Currencies:
                  <b className="dark:text-Dark-Gray text-black">
                    {Object.keys(currencies)[0]}
                  </b>
                </li>
                <li>
                  Languages:
                  <b className="dark:text-Dark-Gray text-black">
                    {Object.values(languages).join(", ")}
                  </b>
                </li>
              </ul>
            </div>
            <div className="mt-12 flex items-center">
              <span className="mr-4 dark:text-White text-Very-Dark-Blue1">
                Border countries:
              </span>
              <ul className="flex gap-2 flex-wrap [&>li]:py-1 [&>li]:px-4  [&>li]:dark:bg-Dark-Blue [&>li]:bg-white  [&>li]:dark:text-white [&>li]:border [&>li]:dark:border-transparent [&>li]:border-black rounded-md [&>li]:rounded-sm [&>li]:cursor-pointer">
                {codesName ? (
                  codesName.map(border => (
                    <Border
                      border={border.name.common}
                      key={border.name.common}
                    />
                  ))
                ) : (
                  <b className="dark:text-white text-Very-Dark-Blue1">
                    This country has no borders
                  </b>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Border({ border }) {
  return (
    <li>
      <Link to={`/${border}`}>{border}</Link>
    </li>
  );
}

export default CountryPage;
