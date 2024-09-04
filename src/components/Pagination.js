function Pagination({
  currentPage,
  totalItems,
  goToPage,
  totalPages,
  onSetItems,
}) {
  return (
    <div className="absolute rounded-3xl bg-white dark:bg-Very-Dark-Blue1 py-3 px-6 w-[55%] max-w-[48rem]  dark:text-white text-Very-Dark-Blue1 flex items-center gap-4 bottom-4 left-2/4 -translate-x-[50%] z-10 shadow-2xl dark:shadow-none">
      <div className="flex items-center gap-2">
        <button
          className="py-1 px-3  dark:bg-Dark-Blue bg-white rounded-full"
          onClick={() => goToPage(currentPage - 1)}
        >
          👈 Prev
        </button>
        <div className="flex items-center gap-4">
          <b>{currentPage}</b>of<b>{totalPages}</b>
        </div>
        <button
          className="py-1 px-3  dark:bg-Dark-Blue bg-white rounded-full"
          onClick={() => goToPage(currentPage + 1)}
        >
          Next 👉
        </button>
      </div>
      <div className="text-black">
        <span className="mr-4 dark:text-white text-black ">
          Countries per page?
        </span>
        <select
          className="px-4 rounded-md bg-Dark-Blue text-white "
          onChange={e => onSetItems(+e.target.value)}
        >
          <option value={6}>6</option>
          <option value={10}>10</option>
          <option value={14}>14</option>
          <option value={20}>20</option>
          <option value={24}>24</option>
        </select>
      </div>
    </div>
  );
}

export default Pagination;
