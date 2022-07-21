import { MessageRoom, User, UserInRoom } from '@prisma/client';
import { createRoom } from './DTO/create-room.dto';
import { createUser } from './DTO/create-users.dto';
import { usersName } from './DTO/users-name.dto';
import { PrismaService } from './prisma/prisma.service';
export declare class AppService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(fields: createUser): Promise<User>;
    getusersName(): Promise<usersName[]>;
    createRoom(user_name: string, fields: createRoom): Promise<UserInRoom>;
    getUsersOfRoom(room_id: number): Promise<UserInRoom[]>;
    getRooms(user_id: number): Promise<{
        room: {
            name: string;
            type: string;
        };
        user_role: string;
    }[]>;
    addUserToRoom(room_id: number, user_id: number): Promise<UserInRoom>;
    sendMessageToRoom(room_id: number, content_msg: string, user_id: number): Promise<MessageRoom>;
    getMessages(room_id: number): Promise<MessageRoom[]>;
}
