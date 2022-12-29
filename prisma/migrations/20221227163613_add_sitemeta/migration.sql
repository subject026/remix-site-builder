-- CreateTable
CREATE TABLE "SiteMeta" (
    "id" TEXT NOT NULL,
    "indexSlug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SiteMeta_pkey" PRIMARY KEY ("id")
);
