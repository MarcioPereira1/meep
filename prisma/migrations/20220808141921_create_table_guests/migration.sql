/*
  Warnings:

  - You are about to drop the column `cpfGuest` on the `listpromoters` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "listpromoters" DROP COLUMN "cpfGuest";

-- CreateTable
CREATE TABLE "guests" (
    "id" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "id_listPromoter" TEXT NOT NULL,

    CONSTRAINT "guests_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "guests_cpf_key" ON "guests"("cpf");

-- AddForeignKey
ALTER TABLE "guests" ADD CONSTRAINT "guests_id_listPromoter_fkey" FOREIGN KEY ("id_listPromoter") REFERENCES "listpromoters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
