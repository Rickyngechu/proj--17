import { useState } from "react";
import Pagination from "./Pagination";
import { useEffect } from "react";
import Country from "./Country";
import Loader from "./Loader";

const URL = "https://restcountries.com/v3.1/all";

function CountriesCont({ filterItem, searchItem }) {
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);

  const [itemsPerPage, setItemsPerPage] = useState(6);

  const totalItems = countries.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const [searched, setSearched] = useState("");

  function goToPage(page) {
    if (page < 1) return;
    if (page > totalPages) return;
    setCurrentPage(page);
  }

  useEffect(
    function () {
      async function fetchCountries() {
        try {
          setIsLoading(true);
          const res = await fetch(`${URL}`);
          const data = await res.json();

          // This will be the start index for the page
          const startIndex = (currentPage - 1) * itemsPerPage;
          // This will be the start index for the page
          const endIndex = startIndex + itemsPerPage;

          const filteredData = data.filter(
            country => country.region === filterItem
          );

          // // IF there is no filter Item return all the data
          filterItem ? setCountries(filteredData) : setCountries(data);

          // Setting the current items based on items per page and filter item
          filterItem
            ? setCurrentItems(() => filteredData.slice(startIndex, endIndex))
            : setCurrentItems(() => data.slice(startIndex, endIndex));
        } catch (err) {
          console.log(err);
        } finally {
          setIsLoading(false);
        }
      }
      fetchCountries();
    },
    [currentPage, itemsPerPage, filterItem]
  );

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchCountry() {
        try {
          const res = await fetch(
            `https://restcountries.com/v3.1/name/${searchItem}`,
            { signal: controller.signal }
          );
          if (res.status === 404) throw new Error("Failed to search country");

          const data = await res.json();
          setSearched(data);
        } catch (err) {
          console.log(err.message);
        }
      }
      searchItem && fetchCountry();
      return function () {
        controller.abort();
      };
    },
    [searchItem]
  );

  if (isLoading) return <Loader />;
  return (
    <>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 max-sm:pb-14 pb-4">
        {searched.length === 1
          ? searched.map(cdata => (
              <Country cdata={cdata} key={cdata.name.common} />
            ))
          : currentItems.map(cdata => (
              <Country cdata={cdata} key={cdata.name.common} />
            ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalItems={totalItems}
        goToPage={goToPage}
        totalPages={totalPages}
        onSetItems={setItemsPerPage}
      />
    </>
  );
}

export default CountriesCont;
