import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth";
import prisma from "@/libs/prisma";
import Link from "next/link";

const Page = async() => {
    const user = await authUserSession()
   const comments = await prisma.comment.findMany({
     where: { user_email: user?.email },
   });
  return (
    <section className="mt-4 mb-2">
    <Header title="My Comment"/>
        <div className="grid mini:grid-cols-1 md:grid-cols-2 gap-4 m-4">
        {comments.map((comment) => {
            return (
            <Link
                href={`/anime/${comment.anime_id}`}
                key={comment.id}
                className="text-color-whity cursor-default bg-color-dark p-4 rounded-lg shadow-lg"
            >
                <p className="font-bold text-lg mb-1 cursor-pointer hover:text-white transition-all duration-500">{comment.anime_title}</p>
                <p className="font-light">{comment.comment}</p>
            </Link>
            );
        })}
        </div>
    </section>
  );
}

export default Page