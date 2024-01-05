import { getAnimeResponse } from "@/libs/api";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";
import AnimeCollectionButton from "@/components/AniMangaList/AnimeCollectionButton";
import { authUserSession } from "@/libs/auth";
import prisma from "@/libs/prisma";
import ButtonBack from "@/components/AniMangaList/ButtonBack";
import AnimeCommentBox from "@/components/AniMangaList/AnimeCommentBox";
import AnimeCommentInput from "@/components/AniMangaList/AnimeCommentInput";
import MetaData from "@/components/AniMangaList/MetaData";

const Page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();
  const collection = await prisma.animeCollection.findFirst({
    where: { user_email: user?.email, anime_id: id },
  });
  return (
    <>
      <div className="p-2 mx-4 mt-4 flex justify-between items-center gap-4 animate__animated animate__fadeIn animate__slower bg-gradient-to-br from-color-primary to-blue-500 rounded-lg shadow-lg">
        <h3 className="text-color-whity text-xl">
          {anime.data?.title} - {anime.data?.status}
        </h3>
        <ButtonBack />
      </div>
      {!collection && user ? (
        <AnimeCollectionButton
          anime_id={id}
          user_email={user?.email}
          anime_img={anime.data?.images.webp.image_url}
          anime_title={anime.data?.title}
          label_button="Tambah ke Koleksi"
          disbtn={false}
        />
      ) : user ? (
        <AnimeCollectionButton
          anime_id={id}
          user_email={user?.email}
          anime_img={anime.data?.images.webp.image_url}
          anime_title={anime.data?.title}
          label_button="Sudah ditambahkan ke koleksi."
          disbtn={true}
        />
      ) : null}

      <div className="px-4 flex lg:flex-nowrap flex-wrap gap-4 text-color-whity">
        <Image
          src={anime.data?.images.webp.image_url}
          alt={anime.data?.images.jpg.image_url}
          width={250}
          height={250}
          className="img-card mini:max-h-[28rem] minni:max-h-[34rem] hmin:max-h-[38rem] hp:max-h-[40rem] sm:max-h-[50rem] rounded-lg my-5 shadow-xl border-2 border-color-dark md:hover:scale-95 duration-500 transition-all delay-200 mx-auto"
        />
        <div className="text-justify text-xl my-4 bg-color-dark rounded-lg p-4">
          {anime.data?.synopsis &&
            anime.data.synopsis.split("\n").map((paragraph, index) => (
              <p className="p-2" key={index}>
                {paragraph}
              </p>
            ))}
        </div>
      </div>
      <div className="px-4 py-2 mx-4 flex gap-4 rounded-lg text-color-whity overflow-x-auto cursor-pointer scrollbar-thin scrollbar-thumb-color-dark scrollbar-track-gray-10">
        <MetaData title={"Peringkat"} detail={anime.data?.rank} />
        <MetaData title={"Skor"} detail={anime.data?.score} />
        <MetaData title={"Episode"} detail={anime.data?.episodes} />
        <MetaData title={"Tipe"} detail={anime.data?.type} />
        <MetaData title={"Sumber"} detail={anime.data?.source} />
        <MetaData title={"Status"} detail={anime.data?.status} />
        <div className="w-36 flex flex-col justify-center items-center rounded-lg border bg-color-dark border-slate-500 shadow-lg p-2 hover:scale-105 transition-all duration-500">
          <h3 className="mini:text-sm font-bold">Studio</h3>
          {anime.data?.studios.length > 0 ? (
            <ul>
              {anime.data?.studios.map((studio, index) => (
                <li key={index} className="mini:text-sm">
                  {studio.name}
                </li>
              ))}
            </ul>
          ) : (
            <p>Tidak ada studio yang tersedia</p>
          )}
        </div>
      </div>
      <div className="bg-color-dark p-4 m-4 rounded-lg shadow-lg">
        <h3 className="text-color-whity text-2xl font-bold mx-4 my-2 border-b pb-2">
          Komentar
        </h3>
        <AnimeCommentBox anime_id={id} />
        {user && (
          <AnimeCommentInput
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
