import { getAnimeResponse, getMangaResponse } from "@/libs/api";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword);
  const searchAnime = await getAnimeResponse("anime", `q=${decodeKeyword}`);
  const searchManga = await getMangaResponse("manga", `q=${decodeKeyword}`);

  return (
    <>
      <section>
        <Header title={`Pencarian Anime untuk ${decodeKeyword} :`} />
        <AnimeList api={searchAnime} />
      </section>
      <section>
        <Header title={`Pencarian Manga untuk ${decodeKeyword} :`} />
        <AnimeList api={searchManga} />
      </section>
    </>
  );
};

export default Page;
