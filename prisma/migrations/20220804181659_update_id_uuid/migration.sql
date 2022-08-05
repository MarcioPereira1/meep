/*
  Warnings:

  - The primary key for the `listpromoters` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `parties` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "listpromoters" DROP CONSTRAINT "listpromoters_id_party_fkey";

-- AlterTable
ALTER TABLE "listpromoters" DROP CONSTRAINT "listpromoters_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "id_party" SET DATA TYPE TEXT,
ADD CONSTRAINT "listpromoters_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "listpromoters_id_seq";

-- AlterTable
ALTER TABLE "parties" DROP CONSTRAINT "parties_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "parties_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "parties_id_seq";

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "users_id_seq";

-- AddForeignKey
ALTER TABLE "listpromoters" ADD CONSTRAINT "listpromoters_id_party_fkey" FOREIGN KEY ("id_party") REFERENCES "parties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
