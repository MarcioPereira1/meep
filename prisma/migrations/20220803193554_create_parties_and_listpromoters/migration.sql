-- CreateTable
CREATE TABLE "parties" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "parties_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "listpromoters" (
    "id" SERIAL NOT NULL,
    "id_party" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "cpfGuest" TEXT NOT NULL,
    "qtdGuest" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "listpromoters_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "listpromoters" ADD CONSTRAINT "listpromoters_id_party_fkey" FOREIGN KEY ("id_party") REFERENCES "parties"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
