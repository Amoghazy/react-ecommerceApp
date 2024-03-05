type PropsPagination = {
  page: number;
  setPage: (page: number) => void;
  total: number;
  productPerPage: number;
};
export default function Pagination({
  page,
  setPage,
  total,
  productPerPage,
}: PropsPagination) {
  const paginiation = [];
  for (let i = 1; i <= Math.ceil(total / productPerPage); i++) {
    console.log(i);
    paginiation.push(i);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="list-style-none flex">
        <li>
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="relative block rounded bg-info px-3 py-1.5 text-sm text-white-600 transition-all duration-300  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
          >
            Previous
          </button>
        </li>
        {paginiation.map((number) => (
          <li
            key={number}
            className={page === number ? "bg-gray-800 text-white" : ""}
          >
            <button
              onClick={() => setPage(number)}
              className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-white-600 transition-all duration-300 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-black"
            >
              {number}
            </button>
          </li>
        ))}

        <li>
          <button
            disabled={page === paginiation.length}
            onClick={() => setPage(page + 1)}
            className="relative  block rounded bg-info px-3 py-1.5 text-sm text-white-600 transition-all duration-300  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}
