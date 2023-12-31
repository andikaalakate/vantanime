import prisma from "@/libs/prisma";

export async function POST(request) {
  const { manga_id, user_email, comment, username, manga_title } = await request.json();
  const data = { manga_id, user_email, comment, username, manga_title };

  const createComment = await prisma.MangaComment.create({ data });

  if (!createComment)
    return Response.json({ status: 500, isCreated: false });
  else return Response.json({ status: 200, isCreated: true });

  return Response.json();
}
