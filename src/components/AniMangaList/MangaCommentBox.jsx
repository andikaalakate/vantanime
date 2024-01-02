import prisma from "@/libs/prisma";

const MangaCommentBox = async ({manga_id}) => {
  const comments = await prisma.MangaComment.findMany({ where: { manga_id } });
  return (
    <div className="grid mini:grid-cols-1 mini:overflow-y-auto md:grid-cols-4 gap-4 m-4 overflow-x-auto">
      {comments.map((comment) => {
        return (
          <div
            key={comment.id}
            className="text-color-whity bg-color-secondary border border-slate-500 p-4 rounded-lg shadow-lg"
          >
            <p className="font-bold text-lg mb-1">{comment.username}</p>
            <p className="font-light">{comment.comment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default MangaCommentBox;
