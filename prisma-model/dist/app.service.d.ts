import { MessageRoom, User, UserInRoom } from '@prisma/client';
import { PrismaService } from './prisma/prisma.service';
export declare class AppService {
    private prisma;
    constructor(prisma: PrismaService);
    createUser(token42_api: string, username: string, losses: number, wins: number, ladder_level: number): Promise<User>;
    createRoom(user_id: number, room_name: string, room_type: string, pass: string): Promise<UserInRoom>;
    addUserToRoom(room_id: number, user_id: number): Promise<UserInRoom>;
    getUsersOfRoom(room_id: number): Promise<UserInRoom[]>;
    sendMessageToRoom(room_id: number, content_msg: string, user_id: number): Promise<MessageRoom>;
}
