import { getMangaResponse } from "@/libs/api";
import Image from "next/image";
import MangaCollectionButton from "@/components/AniMangaList/MangaCollectionButton";
import { authUserSession } from "@/libs/auth";
import prisma from "@/libs/prisma";
import ButtonBack from "@/components/AniMangaList/ButtonBack";
import MangaCommentBox from "@/components/AniMangaList/MangaCommentBox";
import MangaCommentInput from "@/components/AniMangaList/MangaCommentInput";

const Page = async ({ params: { id } }) => {
  const manga = await getMangaResponse(`manga/${id}`);
  const user = await authUserSession();
  const collection = await prisma.MangaCollection.findFirst({
    where: { user_email: user?.email, manga_id: id },
  });
  const comments = await prisma.MangaComment.findFirst({
    where: { user_email: user?.email, manga_id: id },
  });
  //   console.log(manga)
  return (
    <>
      <div className="pt-4 px-4 flex justify-between items-center gap-4">
        <h3 className="text-color-whity text-xl">
          {manga.data?.title} - {manga.data?.year}
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
      <div className="pt-4 px-4 flex gap-2 text-color-whity overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded-lg border border-color-whity p-2">
          <h3>Peringkat</h3>
          <p>{manga.data?.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded-lg border border-color-whity p-2">
          <h3>Skor</h3>
          <p>{manga.data?.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded-lg border border-color-whity p-2">
          <h3>Episode</h3>
          <p>{manga.data?.episodes}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded-lg border border-color-whity p-2">
          <h3>Tipe</h3>
          <p>{manga.data?.type}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded-lg border border-color-whity p-2">
          <h3>Sumber</h3>
          <p>{manga.data?.source}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded-lg border border-color-whity p-2">
          <h3>Status</h3>
          <p>{manga.data?.status}</p>
        </div>
      </div>
      <div className="pt-4 px-4 flex md:flex-nowrap flex-wrap gap-2 text-color-whity">
        <Image
          src={manga.data?.images.webp.image_url}
          alt={manga.data?.images.jpg.image_url}
          width={250}
          height={250}
          className="img-card mini:max-h-[28rem] minni:max-h-[34rem] hmin:max-h-[38rem] hp:max-h-[40rem] sm:max-h-[50rem] rounded-lg my-4"
        />
        <div className="text-justify text-xl py-2">
          {manga.data?.synopsis &&
            manga.data.synopsis.split("\n").map((paragraph, index) => (
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
