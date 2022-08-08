/*
  Warnings:

  - You are about to drop the `guests` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "guests" DROP CONSTRAINT "guests_id_listPromoter_fkey";

-- AlterTable
ALTER TABLE "listpromoters" ADD COLUMN     "guests" TEXT[];

-- DropTable
DROP TABLE "guests";
