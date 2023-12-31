"use client";

import { getMangaResponse } from "@/libs/api";
import MangaList from "@/components/AniMangaList";
import { Pagination } from "@/components/Utilities/Pagination";
import { HeaderMenu } from "@/components/Utilities/Pagination/HeaderMenu";
import { useEffect, useState } from "react";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const data = await getMangaResponse("top/manga", `page=${page}`);
    setTopAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`Manga Terpopuler #${page}`} />
      <div className="pb-16">
      <MangaList api={topAnime} hrefLink={"/manga"} />
      </div>
      <Pagination
        page={page}
        lastPage={topAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
};

export default Page;
