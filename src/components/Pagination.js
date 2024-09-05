function Pagination({
  currentPage,
  totalItems,
  goToPage,
  totalPages,
  onSetItems,
}) {
  return (
    <div className="fixed rounded-3xl bg-white dark:bg-Very-Dark-Blue1 py-2 px-6  max-sm:w-[90%] w-[55%] max-w-[48rem]  dark:text-white text-Very-Dark-Blue1 flex flex-wrap  items-center justify-center gap-2 bottom-0 left-2/4 -translate-x-[50%] z-10 shadow-2xl dark:shadow-none">
      <div className="flex items-center gap-2">
        <button
          className="py-1 px-3  dark:bg-Dark-Blue bg-white rounded-full max-sm:text-[12px]"
          onClick={() => goToPage(currentPage - 1)}
        >
          👈 PREV
        </button>
        <div className="flex items-center gap-4">
          <b>{currentPage}</b>of<b>{totalPages}</b>
        </div>
        <button
          className="py-1 px-3  dark:bg-Dark-Blue bg-white rounded-full max-sm:text-[12px]"
          onClick={() => goToPage(currentPage + 1)}
        >
          NEXT 👉
        </button>
      </div>
      <div className="text-black">
        <span className="mr-4 dark:text-white text-black max-sm:text-[12px] ">
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
