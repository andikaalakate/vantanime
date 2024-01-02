-- CreateTable
CREATE TABLE "AnimeCollection" (
    "id" SERIAL NOT NULL,
    "user_email" TEXT NOT NULL,
    "anime_id" TEXT NOT NULL,
    "anime_img" TEXT,
    "anime_title" TEXT,

    CONSTRAINT "AnimeCollection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MangaCollection" (
    "id" SERIAL NOT NULL,
    "user_email" TEXT NOT NULL,
    "manga_id" TEXT NOT NULL,
    "manga_img" TEXT,
    "manga_title" TEXT,

    CONSTRAINT "MangaCollection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnimeComment" (
    "id" SERIAL NOT NULL,
    "user_email" TEXT NOT NULL,
    "anime_id" TEXT NOT NULL,
    "anime_title" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "AnimeComment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MangaComment" (
    "id" SERIAL NOT NULL,
    "user_email" TEXT NOT NULL,
    "manga_id" TEXT NOT NULL,
    "manga_title" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "MangaComment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AnimeCollection_user_email_anime_id_key" ON "AnimeCollection"("user_email", "anime_id");

-- CreateIndex
CREATE UNIQUE INDEX "MangaCollection_user_email_manga_id_key" ON "MangaCollection"("user_email", "manga_id");
