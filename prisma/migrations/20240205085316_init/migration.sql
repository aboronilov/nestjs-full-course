-- CreateEnum
CREATE TYPE "Role" AS ENUM ('INTERN', 'ENGINEER', 'ADMIN');

-- CreateTable
CREATE TABLE "Emolyee" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Emolyee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Emolyee_name_key" ON "Emolyee"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Emolyee_email_key" ON "Emolyee"("email");
