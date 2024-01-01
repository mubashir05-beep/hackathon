-- CreateTable
CREATE TABLE "Registration_Details" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "teamName" TEXT NOT NULL,
    "teamMembers" TEXT[],
    "teamMembersNumber" TEXT NOT NULL,
    "leaderName" TEXT NOT NULL,
    "projectTitle" TEXT NOT NULL,
    "projectDesc" TEXT NOT NULL,
    "aridNumber" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "section" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Registration_Details_pkey" PRIMARY KEY ("id")
);
