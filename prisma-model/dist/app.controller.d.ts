import { MessageRoom, UserInRoom } from '@prisma/client';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    createUser(): void;
    getUsersNames(): Promise<any>;
    createRoom(): Promise<void>;
    addUserToRoom(room: any, user: any): void;
    getRooms(id: any): Promise<{
        user_role: string;
        room: {
            name: string;
            type: string;
        };
    }[]>;
    getUserOfRoom(id: any): Promise<UserInRoom[]>;
    sendMessageToRoom(): void;
    getMessages(room_id: any): Promise<MessageRoom[]>;
}
