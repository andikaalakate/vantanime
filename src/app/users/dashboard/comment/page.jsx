import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth";
import prisma from "@/libs/prisma";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();
  const animeComments = await prisma.AnimeComment.findMany({
    where: { user_email: user?.email },
  });
  const mangaComments = await prisma.MangaComment.findMany({
    where: { user_email: user?.email },
  });
  return (
    <section className="mt-4 mb-2">
      <Header title="My Comment" />
      <section>
        <h3 className="text-2xl text-color-whity text-center font-bold p-4">
          AnimeList Comment
        </h3>
        <div className="grid mini:grid-cols-1 md:grid-cols-2 gap-4 m-4">
          {animeComments.map((comment) => {
            return (
              <Link
                href={`/anime/${comment.anime_id}`}
                key={comment.id}
                className="text-color-whity cursor-default bg-color-dark p-4 rounded-lg shadow-lg hover:scale-95 transition-all duration-500"
              >
                <p className="font-bold text-lg mb-1 cursor-pointer hover:text-white transition-all duration-500">
                  {comment.anime_title}
                </p>
                <p className="font-thin">{comment.comment}</p>
              </Link>
            );
          })}
        </div>
      </section>
      <section>
        <h3 className="text-2xl text-color-whity text-center font-bold p-4">
          MangaList Comment
        </h3>
        <div className="grid mini:grid-cols-1 md:grid-cols-2 gap-4 m-4">
          {mangaComments.map((comment) => {
            return (
              <Link
                href={`/anime/${comment.manga_id}`}
                key={comment.id}
                className="text-color-whity cursor-default bg-color-dark p-4 rounded-lg shadow-lg hover:scale-95 transition-all duration-500"
              >
                <p className="font-bold text-lg mb-1 cursor-pointer hover:text-white transition-all duration-500">
                  {comment.manga_title}
                </p>
                <p className="font-thin">{comment.comment}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </section>
  );
};

export default Page;
