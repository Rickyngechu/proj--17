function Filters({ filterItem, onSetFilters }) {
  return (
    <ul className="relative border dark:border-transparent border-black rounded-md cursor-pointer">
      <select
        value={filterItem}
        onChange={e => onSetFilters(e.target.value)}
        className=" dark:bg-Dark-Blue bg-white  dark:text-white text-Very-Dark-Blue1 w-full rounded-md py-2 px-6 cursor-pointer"
      >
        <option disabled={true} value={""}>
          Filter by region
        </option>
        <option value="Africa">Afrika</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </ul>
  );
}

export default Filters;
