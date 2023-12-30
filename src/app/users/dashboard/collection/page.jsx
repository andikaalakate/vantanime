import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth";
import prisma from "@/libs/prisma";

const { default: Image } = require("next/image");
const { default: Link } = require("next/link");

const Page = async () => {
  const user = await authUserSession();
  const collection = await prisma.collection.findMany({
    where: { user_email: user?.email },
  });
  return (
    <>
      <section className="mt-4 px-4 w-full">
        <Header title="My Collection" />
        <div className="grid mini:grid-cols-1 hmin:grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-8 sm:grid-cols-3 m-4">
          {collection.map((collect, index) => {
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
    </>
  );
};

export default Page;
