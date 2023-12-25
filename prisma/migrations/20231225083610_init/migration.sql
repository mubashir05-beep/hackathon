/*
  Warnings:

  - You are about to drop the `TeamData` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "TeamData";

-- CreateTable
CREATE TABLE "teamData" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "teamName" TEXT NOT NULL,
    "teamMembers" TEXT[],
    "teamMembersNumber" TEXT NOT NULL,
    "leaderName" TEXT NOT NULL,
    "aridNumber" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "email" TEXT,
    "section" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "teamData_pkey" PRIMARY KEY ("id")
);
