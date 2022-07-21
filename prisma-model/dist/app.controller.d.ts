import { MessageRoom, User, UserInRoom } from '@prisma/client';
import { AppService } from './app.service';
import { createRoom } from './DTO/create-room.dto';
import { createUser } from './DTO/create-users.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    createUser(fields: createUser): Promise<User>;
    getUsersName(): Promise<any>;
    createRoom(name: string, fields: createRoom): Promise<UserInRoom>;
    addUserToRoom(room: any, user: any): void;
    getRooms(id: any): Promise<{
        room: {
            name: string;
            type: string;
        };
        user_role: string;
    }[]>;
    getUserOfRoom(id: any): Promise<UserInRoom[]>;
    sendMessageToRoom(): void;
    getMessages(room_id: any): Promise<MessageRoom[]>;
}
