import 'animate.css'
import Image from "next/image";
import Link from "next/link";

const AniMangaList = ({ api, hrefLink }) => {
  return (
    <div className="grid mini:grid-cols-1 hmin:grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-8 sm:grid-cols-3 p-4 animate__animated animate__fadeInUp animate__slow">
      {api.data?.map((AniManga) => {
        return (
          <div
            key={AniManga.mal_id}
            className="shadow-xl hover:scale-105 transition-all duration-500 shadow-color-dark bg-color-whity rounded-lg border-2 border-color-whity hover:bg-color-primary hover:border-color-primary group active:scale-150"
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
              <h3 className="font-bold text-md md:text-xl p-4 group-hover:text-color-whity transition-all duration-500">
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
