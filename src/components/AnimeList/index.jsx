import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api, hrefLink }) => {
  return (
    <div className="grid mini:grid-cols-1 hmin:grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-8 sm:grid-cols-3 p-4">
      {api.data?.map((anime) => {
        return (
          <div
            key={anime.mal_id}
            className="shadow-xl hover:scale-105 transition-all duration-500 shadow-color-dark bg-color-whity rounded-lg border-2 border-color-whity"
          >
            <Link
              href={`${hrefLink}/${anime.mal_id}`}
              className="cursor-pointer"
            >
              <Image
                src={anime.images?.webp.image_url}
                alt={anime.images?.jpg.image_url}
                width={350}
                height={350}
                className="img-card rounded-t-lg"
              />
              <h3 className="font-bold text-md md:text-xl p-4 hover:text-color-primary transition-all duration-500">
                {anime.title}
              </h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AnimeList;
