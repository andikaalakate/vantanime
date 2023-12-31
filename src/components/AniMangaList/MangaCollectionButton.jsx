"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const MangaCollectionButton = ({ disbtn, label_button, manga_id, user_email, manga_img, manga_title }) => {
  const [isCreated, setIsCreated] = useState(false);

  const router = useRouter();

  const handleCollection = async (event) => {
    event.preventDefault();

    const data = { manga_id, user_email, manga_img, manga_title };

    const response = await fetch("/api/v1/manga/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const collection = await response.json();
    if (collection.status == 200) {
      setIsCreated(collection.isCreated);
      router.refresh();
    }
    return;
  };
  return (
    <>
      {isCreated ? (
        <p className="text-color-whity ml-4 my-2">
          Berhasil ditambahkan ke koleksi.
        </p>
      ) : (
        <button
          onClick={handleCollection}
          className="bg-color-primary text-base rounded-md shadow-lg py-2 px-4 font-bold text-color-whity hover:text-slate-200 hover:bg-[#0041C8] transition-all duration-500 self-start flex ml-4 my-2" disabled={disbtn}
        >
          {label_button}
        </button>
      )}
    </>
  );
};

export default MangaCollectionButton;
