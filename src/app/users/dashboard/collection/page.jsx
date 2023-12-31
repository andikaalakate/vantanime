import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth";
import prisma from "@/libs/prisma";

const { default: Image } = require("next/image");
const { default: Link } = require("next/link");

const Page = async () => {
  const user = await authUserSession();
  const animeCollection = await prisma.AnimeCollection.findMany({
    where: { user_email: user?.email },
  });
  const mangaCollection = await prisma.MangaCollection.findMany({
    where: { user_email: user?.email },
  });
  return (
    <>
      <section className="mt-4 px-4 w-full">
        <Header title="My Collection" />
        <section>
          <h3 className="text-2xl text-color-whity text-center font-bold p-4">
            AnimeList Collection
          </h3>
          <div className="grid mini:grid-cols-1 hmin:grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-8 sm:grid-cols-3 m-4">
            {animeCollection.map((collect, index) => {
              return (
                <Link
                  key={index}
                  href={`/anime/${collect.anime_id}`}
                  className="shadow-xl hover:scale-105 transition-all duration-500 shadow-color-dark bg-color-whity rounded-lg border-2 border-color-whity"
                >
                  <Image
                    src={collect.anime_img}
                    alt={collect.anime_img}
                    width={350}
                    height={350}
                    className="img-card rounded-t-lg"
                  />
                  <h5 className="font-bold text-md md:text-xl p-4 hover:text-color-primary transition-all duration-500">
                    {collect.anime_title}
                  </h5>
                </Link>
              );
            })}
          </div>
        </section>
        <section>
          <h3 className="text-2xl text-color-whity text-center font-bold p-4">
            MangaList Collection
          </h3>
          <div className="grid mini:grid-cols-1 hmin:grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-8 sm:grid-cols-3 m-4">
            {mangaCollection.map((collect, index) => {
              return (
                <Link
                  key={index}
                  href={`/manga/${collect.manga_id}`}
                  className="shadow-xl hover:scale-105 transition-all duration-500 shadow-color-dark bg-color-whity rounded-lg border-2 border-color-whity"
                >
                  <Image
                    src={collect.manga_img}
                    alt={collect.manga_img}
                    width={350}
                    height={350}
                    className="img-card rounded-t-lg"
                  />
                  <h5 className="font-bold text-md md:text-xl p-4 hover:text-color-primary transition-all duration-500">
                    {collect.manga_title}
                  </h5>
                </Link>
              );
            })}
          </div>
        </section>
      </section>
    </>
  );
};

export default Page;
