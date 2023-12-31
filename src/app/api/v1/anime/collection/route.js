import prisma from "@/libs/prisma";

export async function POST(request) {
  const { anime_id, user_email, anime_img, anime_title } = await request.json();
  const data = { anime_id, user_email, anime_img, anime_title };

  const createCollection = await prisma.AnimeCollection.create({ data });

  if (!createCollection)
    return Response.json({ status: 500, isCreated: false });
  else return Response.json({ status: 200, isCreated: true });

  return Response.json();
}
