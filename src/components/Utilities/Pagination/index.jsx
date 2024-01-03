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
    <div className="flex justify-center gap-4 text-color-whity items-center py-4 px-2 text-2xl animate__animated animate__fadeIn animate__slower bg-gradient-to-br from-color-primary to-blue-500  shadow-lg">
      {page <= 1 ? null : (
        <button
          onClick={handlePrevPage}
          className="transition-all hover:text-white duration-500"
        >
          Prev
        </button>
      )}
      <p className="px-2">
        {page} of
        <button
          onClick={handleLastPage}
          className="pl-2 transition-all hover:text-white duration-500"
        >
          {lastPage}
        </button>
      </p>
      {page >= lastPage ? null : (
        <button
          onClick={handleNextPage}
          className="transition-all hover:text-white duration-500"
        >
          Next
        </button>
      )}
    </div>
  );
};
