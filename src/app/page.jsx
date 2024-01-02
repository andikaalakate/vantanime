import AniMangaList from "@/components/AniMangaList";
import Header from "@/components/AniMangaList/Header";
import {
  getAnimeResponse,
  getMangaResponse,
  getNestedAnimeResponse,
  getNestedMangaResponse,
  reproduce,
} from "@/libs/api";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8");
  const topManga = await getMangaResponse("top/manga", "limit=8");
  let recAnime = await getNestedAnimeResponse("recommendations/anime", "entry");
  let recManga = await getNestedMangaResponse("recommendations/manga", "entry");
  recAnime = reproduce(recAnime, 8);
  recManga = reproduce(recManga, 8);

  return (
    <>
      <section>
        <Header
          title="Anime Paling Populer"
          linkTitle="Lihat Semua"
          linkHref="/anime/populer"
        />
        <AniMangaList api={topAnime} hrefLink={"/anime"} />
      </section>
      <section>
        <Header title="Rekomendasi Anime" />
        <AniMangaList api={recAnime} hrefLink={"/anime"} />
      </section>
      <section>
        <Header
          title="Manga Paling Populer"
          linkTitle="Lihat Semua"
          linkHref="/manga/populer"
        />
        <AniMangaList api={topManga} hrefLink={"/manga"} />
      </section>
      <section>
        <Header title="Rekomendasi Manga" />
        <AniMangaList api={recManga} hrefLink={"/manga"} />
      </section>
    </>
  );
};

export default Page;
