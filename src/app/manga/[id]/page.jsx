import { getMangaResponse } from "@/libs/api";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const manga = await getMangaResponse(`manga/${id}`);
  //   console.log(manga)
  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-color-whity text-xl">
          {manga.data?.title} - {manga.data?.year}
        </h3>
      </div>
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
        {/* <div className="w-36 flex flex-col justify-center items-center rounded-lg border border-color-whity p-2">
          <h3>Studio</h3>
          {manga.data?.studios.length > 0 ? (
            <ul>
              {manga.data?.studios.map((studio, index) => (
                <li key={index}>{studio.name}</li>
              ))}
            </ul>
          ) : (
            <p>Tidak ada studio yang tersedia</p>
          )}
        </div> */}
        <div className="w-36 flex flex-col justify-center items-center rounded-lg border border-color-whity p-2">
          <h3>Genre</h3>
          {manga.data?.genres.length > 0 ? (
            <ul>
              {manga.data?.genres.map((genre, index) => (
                <li key={index}>{genre.name}</li>
              ))}
            </ul>
          ) : (
            <p>Tidak ada genre yang tersedia</p>
          )}
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
      {/* <div>
        <VideoPlayer youtubeId={manga.data?.trailer.youtube_id}/>
      </div> */}
    </>
  );
};

export default Page;
