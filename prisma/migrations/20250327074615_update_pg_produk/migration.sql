-- CreateTable
CREATE TABLE "pg_produk" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nama_produk" TEXT NOT NULL,

    CONSTRAINT "pg_produk_pkey" PRIMARY KEY ("id")
);
