import { getMangaResponse } from "@/libs/api";
import Image from "next/image";
import MangaCollectionButton from "@/components/AniMangaList/MangaCollectionButton";
import { authUserSession } from "@/libs/auth";
import prisma from "@/libs/prisma";
import ButtonBack from "@/components/AniMangaList/ButtonBack";
import MangaCommentBox from "@/components/AniMangaList/MangaCommentBox";
import MangaCommentInput from "@/components/AniMangaList/MangaCommentInput";
import MetaData from "@/components/AniMangaList/MetaData";

const Page = async ({ params: { id } }) => {
  const manga = await getMangaResponse(`manga/${id}`);
  const user = await authUserSession();
  const collection = await prisma.mangaCollection.findFirst({
    where: { user_email: user?.email, manga_id: id },
  });
  //   console.log(manga)
  return (
    <>
      <div className="pt-4 px-4 flex justify-between items-center gap-4">
        <h3 className="text-color-whity text-xl">
          {manga.data?.title} - {manga.data?.status}
        </h3>
        <ButtonBack />
      </div>
      {!collection && user ? (
        <MangaCollectionButton
          manga_id={id}
          user_email={user?.email}
          manga_img={manga.data?.images.webp.image_url}
          manga_title={manga.data?.title}
          label_button="Tambah ke Koleksi"
          disbtn={false}
        />
      ) : user ? (
        <MangaCollectionButton
          manga_id={id}
          user_email={user?.email}
          manga_img={manga.data?.images.webp.image_url}
          manga_title={manga.data?.title}
          label_button="Sudah ditambahkan ke koleksi."
          disbtn={true}
        />
      ) : null}

      <div className="px-4 flex md:flex-nowrap flex-wrap gap-4 text-color-whity">
        <Image
          src={manga.data?.images.webp.image_url}
          alt={manga.data?.images.jpg.image_url}
          width={250}
          height={250}
          layout="fixed"
          className="img-card mini:max-h-[28rem] minni:max-h-[34rem] hmin:max-h-[38rem] hp:max-h-[40rem] sm:max-h-[50rem] rounded-lg my-5 shadow-xl border-2 border-color-dark md:hover:scale-95 duration-500 transition-all delay-200"
        />
        <div className="text-justify text-xl my-4 bg-color-dark rounded-lg p-4">
          {manga.data?.synopsis &&
            manga.data.synopsis.split("\n").map((paragraph, index) => (
              <p className="p-2" key={index}>
                {paragraph}
              </p>
            ))}
        </div>
      </div>

      <div className="px-4 py-2 mx-4 flex gap-4 rounded-lg text-color-whity overflow-x-auto cursor-pointer scrollbar-thin scrollbar-thumb-color-dark scrollbar-track-gray-10">
        <MetaData title={"Peringkat"} detail={manga.data?.rank} />
        <MetaData title={"Skor"} detail={manga.data?.score} />
        <MetaData title={"Chapters"} detail={manga.data?.chapters} />
        <MetaData title={"Volumes"} detail={manga.data?.volumes} />
        <MetaData title={"Tipe"} detail={manga.data?.type} />
        <MetaData title={"Status"} detail={manga.data?.status} />
      </div>

      <div className="bg-color-dark p-4 m-4 rounded-lg shadow-lg">
        <h3 className="text-color-whity text-2xl font-bold mx-4 my-2 border-b pb-2">
          Komentar
        </h3>
        <MangaCommentBox manga_id={id} />
        {user && (
          <MangaCommentInput
            manga_id={id}
            user_email={user?.email}
            username={user?.name}
            manga_title={manga.data?.title}
          />
        )}
      </div>
    </>
  );
};

export default Page;
