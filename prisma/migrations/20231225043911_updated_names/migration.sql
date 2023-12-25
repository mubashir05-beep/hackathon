/*
  Warnings:

  - You are about to drop the column `TeamMembersList` on the `TeamData` table. All the data in the column will be lost.
  - You are about to drop the column `TeamName` on the `TeamData` table. All the data in the column will be lost.
  - You are about to drop the column `leaderArid` on the `TeamData` table. All the data in the column will be lost.
  - You are about to drop the column `leaderEmail` on the `TeamData` table. All the data in the column will be lost.
  - You are about to drop the column `leaderPhone` on the `TeamData` table. All the data in the column will be lost.
  - You are about to drop the column `leaderSection` on the `TeamData` table. All the data in the column will be lost.
  - Added the required column `aridNumber` to the `TeamData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teamMembersNumber` to the `TeamData` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teamName` to the `TeamData` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TeamData" DROP COLUMN "TeamMembersList",
DROP COLUMN "TeamName",
DROP COLUMN "leaderArid",
DROP COLUMN "leaderEmail",
DROP COLUMN "leaderPhone",
DROP COLUMN "leaderSection",
ADD COLUMN     "aridNumber" TEXT NOT NULL,
ADD COLUMN     "email" TEXT,
ADD COLUMN     "phoneNumber" TEXT,
ADD COLUMN     "section" TEXT,
ADD COLUMN     "teamMembers" TEXT[],
ADD COLUMN     "teamMembersNumber" TEXT NOT NULL,
ADD COLUMN     "teamName" TEXT NOT NULL;
