import { getAnimeResponse, getMangaResponse } from "@/libs/api";
import AniMangaList from "@/components/AniMangaList";
import Header from "@/components/AniMangaList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodeKeyword = decodeURI(keyword);
  const searchAnime = await getAnimeResponse("anime", `q=${decodeKeyword}`);
  const searchManga = await getMangaResponse("manga", `q=${decodeKeyword}`);

  return (
    <>
      <section>
        <Header title={`Pencarian Anime untuk ${decodeKeyword} :`} />
        <AniMangaList api={searchAnime} hrefLink={"/anime"} />
      </section>
      <section>
        <Header title={`Pencarian Manga untuk ${decodeKeyword} :`} />
        <AniMangaList api={searchManga} hrefLink={"/manga"} />
      </section>
    </>
  );
};

export default Page;
