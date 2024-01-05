import {
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretLeft,
  CaretRight,
} from "@phosphor-icons/react";
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
  const handleFirstPage = () => {
    setPage((prevState) => (prevState = 1));
    scrollTop();
  };

  return (
    <div className="fixed bottom-0 w-full mx-auto flex justify-center">
      <div className="animate__animated animate__fadeIn animate__slower flex w-full items-center justify-center gap-4 bg-gradient-to-br from-color-primary to-blue-500 px-2 py-3 text-color-whity shadow-lg mini:text-lg md:text-2xl mx-4 rounded-t-lg">
        {page <= 1 ? null : (
          <div className="mini:text-lg md:text-2xl items-center flex gap-4">
            <button
              onClick={handleFirstPage}
              className="transition-all duration-500 hover:text-white"
            >
              <CaretDoubleLeft />
            </button>
            <button
              onClick={handlePrevPage}
              className="transition-all duration-500 hover:text-white"
            >
              <CaretLeft />
            </button>
          </div>
        )}
        <p className="px-2">
          {page} of
          <button
            onClick={handleLastPage}
            className="pl-2 transition-all duration-500 hover:text-white"
          >
            {lastPage}
          </button>
        </p>
        {page >= lastPage ? null : (
          <div className="mini:text-lg md:text-2xl items-center flex gap-4">
            <button
              onClick={handleNextPage}
              className="transition-all duration-500 hover:text-white"
            >
              <CaretRight />
            </button>
            <button
              onClick={handleLastPage}
              className="transition-all duration-500 hover:text-white"
            >
              <CaretDoubleRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
