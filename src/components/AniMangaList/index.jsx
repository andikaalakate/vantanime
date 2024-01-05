import "animate.css";
import Image from "next/image";
import Link from "next/link";

const AniMangaList = ({ api, hrefLink }) => {
  return (
    <div className="animate__animated animate__fadeInUp animate__slow grid p-4 mini:grid-cols-2 mini:gap-6 hmin:grid-cols-2 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-8">
      {api.data?.map((AniManga) => {
        return (
          <div
            key={AniManga.mal_id}
            className="group rounded-lg border-2 border-color-whity bg-gradient-to-br from-color-whity to-white shadow-xl shadow-color-dark transition-all duration-500 hover:scale-105 hover:border-color-primary hover:from-color-primary hover:to-blue-500 active:scale-110"
          >
            <Link
              href={`${hrefLink}/${AniManga.mal_id}`}
              className="cursor-pointer"
            >
              <Image
                src={AniManga.images?.webp.image_url}
                alt={AniManga.images?.jpg.image_url}
                width={350}
                height={350}
                className="img-card rounded-t-lg"
              />
              <h3
                className="text-md title p-4 font-bold transition-all duration-500 group-hover:text-color-whity md:text-xl text-color-dark"
                title={AniManga.title}
              >
                {AniManga.title}
              </h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AniMangaList;
