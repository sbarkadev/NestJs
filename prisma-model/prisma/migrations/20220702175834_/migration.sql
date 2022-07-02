-- CreateTable
CREATE TABLE "MessageRoom" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "from" INTEGER NOT NULL,
    "to_room" INTEGER NOT NULL,
    "content_msg" TEXT NOT NULL,
    "wasRead" BOOLEAN NOT NULL,

    CONSTRAINT "MessageRoom_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MessageRoom" ADD CONSTRAINT "MessageRoom_from_fkey" FOREIGN KEY ("from") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MessageRoom" ADD CONSTRAINT "MessageRoom_to_room_fkey" FOREIGN KEY ("to_room") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
