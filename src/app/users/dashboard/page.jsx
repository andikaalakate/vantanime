import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();

  return (
    <>
    <section className="my-4">
      <Header title="Dashboard" />
    </section>
      <div className="text-color-whity flex justify-center items-center bg-color-dark rounded-xl hover:scale-105 transition-all duration-500 hmin:max-w-sm mini:max-w-xs mx-auto shadow-xl shadow-color-dark border-4 border-color-whity my-8 py-4 flex-row flex-1 grow">
        <div className="items-center justify-center mx-auto my-auto mini:px-4">
          <h5 className="text-2xl font-bold py-4 mx-auto text-center">
            Welcome, {user?.name}
          </h5>
          <Image
            src={user?.image}
            alt="..."
            width={250}
            height={250}
            className="mx-auto hover:scale-105 transition-all duration-500 cursor-pointer"
          />
          <div className="py-8 flex gap-4 flex-col">
            <Link
              href="/users/dashboard/profile"
              className="bg-color-primary text-lg rounded-md shadow-lg py-3 px-4 font-bold text-color-whity hover:text-slate-200 hover:bg-[#0041C8] transition-all duration-500 hover:scale-95"
            >
              My Profile
            </Link>
            <Link
              href="/users/dashboard/collection"
              className="bg-color-primary text-lg rounded-md shadow-lg py-3 px-4 font-bold text-color-whity hover:text-slate-200 hover:bg-[#0041C8] transition-all duration-500 hover:scale-95"
            >
              My Collection
            </Link>
            <Link
              href="/users/dashboard/comment"
              className="bg-color-primary text-lg rounded-md shadow-lg py-3 px-4 font-bold text-color-whity hover:text-slate-200 hover:bg-[#0041C8] transition-all duration-500 hover:scale-95"
            >
              My Comment
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
