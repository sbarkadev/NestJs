-- CreateTable
CREATE TABLE "Friendship" (
    "id" SERIAL NOT NULL,
    "user_1" INTEGER NOT NULL,
    "user_2" INTEGER NOT NULL,
    "state_block" BOOLEAN NOT NULL,

    CONSTRAINT "Friendship_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Friendship" ADD CONSTRAINT "Friendship_user_1_fkey" FOREIGN KEY ("user_1") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Friendship" ADD CONSTRAINT "Friendship_user_2_fkey" FOREIGN KEY ("user_2") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
