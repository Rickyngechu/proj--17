import { useState } from "react";
import CountriesCont from "../components/CountriesContainer";
import Navigation from "../components/Navigation";

function Main() {
  const [filterItem, setFilterItem] = useState("");
  const [searchItem, setSearchItem] = useState("");

  return (
    <main className="min-h-[100vh] dark:bg-Very-Dark-Blue  py-10 bg-White">
      <div className="cont h-12 max-w-7xl w-[90%] mx-auto">
        <Navigation
          filterItem={filterItem}
          setFilterItem={setFilterItem}
          searchItem={searchItem}
          setSearchItem={setSearchItem}
        />
      </div>

      <div className="cont max-w-7xl w-[90%] mx-auto">
        <CountriesCont filterItem={filterItem} searchItem={searchItem} />
      </div>
    </main>
  );
}

export default Main;
