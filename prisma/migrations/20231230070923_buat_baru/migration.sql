/*
  Warnings:

  - You are about to drop the column `mal_id` on the `collection` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_email,anime_id]` on the table `Collection` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `anime_id` to the `Collection` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Collection_user_email_mal_id_key` ON `collection`;

-- AlterTable
ALTER TABLE `collection` DROP COLUMN `mal_id`,
    ADD COLUMN `anime_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `anime_img` VARCHAR(191) NULL,
    ADD COLUMN `anime_title` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Collection_user_email_anime_id_key` ON `Collection`(`user_email`, `anime_id`);
