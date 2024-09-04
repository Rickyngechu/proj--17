import Filters from "./Filters";
import Search from "./Search";

function Navigation({ filterItem, setFilterItem, searchItem, setSearchItem }) {
  return (
    <div className="flex justify-between items-center  ">
      <Search searchItem={searchItem} onSearchITem={setSearchItem} />
      <Filters filterItem={filterItem} onSetFilters={setFilterItem} />
    </div>
  );
}
export default Navigation;
