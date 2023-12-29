"use client";

import { getAnimeResponse } from "@/libs/api";
import AnimeList from "@/components/AnimeList";
import { Pagination } from "@/components/Utilities/Pagination";
import { HeaderMenu } from "@/components/Utilities/Pagination/HeaderMenu";
import { useEffect, useState } from "react";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const data = await getAnimeResponse("top/anime", `page=${page}`);
    setTopAnime(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`Anime Terpopuler #${page}`} />
      <AnimeList api={topAnime} hrefLink={"/anime"} />
      <Pagination
        page={page}
        lastPage={topAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
};

export default Page;
