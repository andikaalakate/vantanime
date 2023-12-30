import { getAnimeResponse } from "@/libs/api";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import CollectionButton from "@/components/AnimeList/CollectionButton";
import { authUserSession } from "@/libs/auth";
import prisma from "@/libs/prisma";
import ButtonBack from "@/components/AnimeList/ButtonBack";
import CommentInput from "@/components/AnimeList/CommentInput";
import CommentBox from "@/components/AnimeList/CommentBox";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();
  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_id: id },
  });
  const comments = await prisma.comment.findFirst({
    where: { user_email: user?.email, anime_id: id },
  });
  //   console.log(anime)
  return (
    <>
      <div className="pt-4 px-4 flex justify-between items-center gap-4">
        <h3 className="text-color-whity text-xl">
          {anime.data?.title} - {anime.data?.year}
        </h3>
        <ButtonBack />
      </div>
      {!collection && user ? (
        <CollectionButton
          anime_id={id}
          user_email={user?.email}
          anime_img={anime.data?.images.webp.image_url}
          anime_title={anime.data?.title}
          label_button="Tambah ke Koleksi"
          disbtn={false}
        />
      ) : user ? (
        <CollectionButton
          anime_id={id}
          user_email={user?.email}
          anime_img={anime.data?.images.webp.image_url}
          anime_title={anime.data?.title}
          label_button="Sudah ditambahkan ke koleksi."
          disbtn={true}
        />
      ) : null}

      <div className="pt-4 px-4 flex gap-2 text-color-whity overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded-lg border border-color-whity p-2">
          <h3>Peringkat</h3>
          <p>{anime.data?.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded-lg border border-color-whity p-2">
          <h3>Skor</h3>
          <p>{anime.data?.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded-lg border border-color-whity p-2">
          <h3>Episode</h3>
          <p>{anime.data?.episodes}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded-lg border border-color-whity p-2">
          <h3>Tipe</h3>
          <p>{anime.data?.type}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded-lg border border-color-whity p-2">
          <h3>Sumber</h3>
          <p>{anime.data?.source}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded-lg border border-color-whity p-2">
          <h3>Status</h3>
          <p>{anime.data?.status}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded-lg border border-color-whity p-2">
          <h3>Studio</h3>
          {anime.data?.studios.length > 0 ? (
            <ul>
              {anime.data?.studios.map((studio, index) => (
                <li key={index}>{studio.name}</li>
              ))}
            </ul>
          ) : (
            <p>Tidak ada studio yang tersedia</p>
          )}
        </div>
        {/* <div className="w-36 flex flex-col justify-center items-center rounded-lg border border-color-whity p-2">
          <h3>Genre</h3>
          {anime.data?.genres.length > 0 ? (
            <ul>
              {anime.data?.genres.map((genre, index) => (
                <li key={index}>{genre.name}</li>
              ))}
            </ul>
          ) : (
            <p>Tidak ada genre yang tersedia</p>
          )}
        </div> */}
      </div>
      <div className="pt-4 px-4 flex md:flex-nowrap flex-wrap gap-2 text-color-whity">
        <Image
          src={anime.data?.images.webp.image_url}
          alt={anime.data?.images.jpg.image_url}
          width={250}
          height={250}
          className="img-card mini:max-h-[28rem] minni:max-h-[34rem] hmin:max-h-[38rem] hp:max-h-[40rem] sm:max-h-[50rem] rounded-lg my-4"
        />
        <div className="text-justify text-xl py-2">
          {anime.data?.synopsis &&
            anime.data.synopsis.split("\n").map((paragraph, index) => (
              <p className="p-2" key={index}>
                {paragraph}
              </p>
            ))}
        </div>
      </div>
      <div>
        {comments && (
          <h3 className="text-color-whity text-2xl font-bold ml-4">Komentar</h3>
        )}
        <CommentBox anime_id={id} />
        {user && (
          <CommentInput
            anime_id={id}
            user_email={user?.email}
            username={user?.name}
            anime_title={anime.data?.title}
          />
        )}
      </div>

      <div>
        <VideoPlayer youtubeId={anime.data?.trailer.youtube_id} />
      </div>
    </>
  );
};

export default Page;
