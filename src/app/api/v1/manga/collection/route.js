import prisma from "@/libs/prisma";

export async function POST(request) {
  const { manga_id, user_email, manga_img, manga_title } = await request.json();
  const data = { manga_id, user_email, manga_img, manga_title };

  const createCollection = await prisma.mangaCollection.create({ data });

  if (!createCollection)
    return Response.json({ status: 500, isCreated: false });
  else return Response.json({ status: 200, isCreated: true });

  return Response.json();
}
