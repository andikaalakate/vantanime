const { default: Image } = require("next/image");
const { default: Link } = require("next/link");

const Page = () => {
  return (
    <>
      <section className="mt-4">
        <h3 className="text-2xl text-color-whity text-center my-4">
          My Collection
        </h3>
        <div className="grid mini:grid-cols-1 hmin:grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-6 sm:grid-cols-3 justify-center place-items-center mx-4">
          <Link href="/" className="relative rounded-lg">
            <Image
              src="https://placehold.co/600x400.png"
              alt=""
              width={600}
              height={400}
              className="img-card rounded-lg"
            />
            <div className="w-full absolute flex justify-center items-center bottom-0 bg-color-primary">
            <h5 className="text-xl text-color-whity">Judul Anime</h5>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Page