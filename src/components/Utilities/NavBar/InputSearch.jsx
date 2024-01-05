"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();
  const handleSearch = (event) => {
    const keyword = searchRef.current.value;

    if (!keyword || keyword.length <= 3 || keyword.trim() === "") return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="mini:sticky relative mini:top-0 mini:w-full md:w-1/2 md:px-24 mini:inset-0">
      <input
        type="text"
        placeholder="Cari Anime / Manga ..."
        className="w-full rounded p-2 text-color-dark placeholder:text-slate-800 ring-color-primary bg-color-whity"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button
        className="absolute right-2 -top-[0.14rem] rounded  px-3 py-[0.65rem] text-color-dark md:right-24"
        onClick={handleSearch}
      >
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;

