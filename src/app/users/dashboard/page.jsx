import { authUserSession } from "@/libs/auth";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();

  return (
    <>
      <div className="text-color-whity flex flex-col my-8 justify-center items-center">
        <h5 className="text-2xl font-bold py-4">Welcome To {user?.name}</h5>
        <Image src={user?.image} alt="..." width={250} height={250} />
        <div className="py-8 flex gap-4">
          <Link
            href="/users/dashboard/collection"
            className="bg-color-primary text-lg rounded-md shadow-lg py-3 px-4 font-bold text-color-whity hover:text-slate-200 hover:bg-[#0041C8] transition-all duration-500"
          >
            My Collection
          </Link>
          <Link
            href="/users/dashboard/comment"
            className="bg-color-primary text-lg rounded-md shadow-lg py-3 px-4 font-bold text-color-whity hover:text-slate-200 hover:bg-[#0041C8] transition-all duration-500"
          >
            My Comment
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page;
