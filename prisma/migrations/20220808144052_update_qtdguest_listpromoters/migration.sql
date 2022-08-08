-- AlterTable
CREATE SEQUENCE "listpromoters_qtdguest_seq";
ALTER TABLE "listpromoters" ALTER COLUMN "qtdGuest" SET DEFAULT nextval('listpromoters_qtdguest_seq');
ALTER SEQUENCE "listpromoters_qtdguest_seq" OWNED BY "listpromoters"."qtdGuest";
