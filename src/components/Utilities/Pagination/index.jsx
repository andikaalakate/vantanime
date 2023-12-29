import React from "react";

export const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };
  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };
  const handleLastPage = () => {
    setPage((prevState) => (prevState = lastPage));
    scrollTop();
  };

  return (
    <div className="flex justify-center gap-4 text-color-whity items-center py-4 px-2 text-2xl">
      {page <= 1 ? null : (
        <button
          onClick={handlePrevPage}
          className="transition-all hover:text-color-primary duration-500"
        >
          Prev
        </button>
      )}
      <p className="px-2">
        {page} of
        <button
          onClick={handleLastPage}
          className="pl-2 transition-all hover:text-color-primary duration-500"
        >
          {lastPage}
        </button>
      </p>
      {page >= lastPage ? null : (
        <button
          onClick={handleNextPage}
          className="transition-all hover:text-color-primary duration-500"
        >
          Next
        </button>
      )}
    </div>
  );
};
