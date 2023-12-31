/*
  Warnings:

  - You are about to drop the `collection` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `collection`;

-- CreateTable
CREATE TABLE `AnimeCollection` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_email` VARCHAR(191) NOT NULL,
    `anime_id` VARCHAR(191) NOT NULL,
    `anime_img` VARCHAR(191) NULL,
    `anime_title` VARCHAR(191) NULL,

    UNIQUE INDEX `AnimeCollection_user_email_anime_id_key`(`user_email`, `anime_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MangaCollection` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_email` VARCHAR(191) NOT NULL,
    `manga_id` VARCHAR(191) NOT NULL,
    `manga_img` VARCHAR(191) NULL,
    `manga_title` VARCHAR(191) NULL,

    UNIQUE INDEX `MangaCollection_user_email_manga_id_key`(`user_email`, `manga_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
