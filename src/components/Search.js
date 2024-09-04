function Search({ searchItem, onSearchITem }) {
  return (
    <div
      className="btn py-2 px-6 flex items-center gap-2 dark:bg-Dark-Blue bg-white  border dark:border-transparent border-black rounded-md
    "
    >
      <span className="h-5 w-5  dark:fill-white fill-black">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
        </svg>
      </span>
      <input
        onChange={e => onSearchITem(e.target.value)}
        value={searchItem}
        className="dark:bg-Dark-Blue bg-white outline-none border-collapse dark:text-white text-Very-Dark-Blue1s px-4"
        placeholder="Search for a country..."
      />
    </div>
  );
}

export default Search;
