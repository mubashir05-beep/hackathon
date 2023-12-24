/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "Profile";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "TeamData" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "TeamName" TEXT NOT NULL,
    "TeamMembers" TEXT NOT NULL,
    "TeamMembersList" TEXT[],
    "leaderName" TEXT NOT NULL,
    "leaderArid" TEXT NOT NULL,
    "leaderPhone" TEXT,
    "leaderEmail" TEXT,
    "leaderSection" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "TeamData_pkey" PRIMARY KEY ("id")
);
