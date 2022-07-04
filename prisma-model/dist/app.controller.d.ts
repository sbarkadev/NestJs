import { MessageRoom, UserInRoom } from '@prisma/client';
import { AppService } from './app.service';
import { usersName } from './DTO/users-name.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    createUser(): void;
    createRoom(): void;
    addUserToRoom(): void;
    getUserOfRoom(): Promise<UserInRoom[]>;
    sendMessageToRoom(): void;
    getMessages(room_id: number): Promise<MessageRoom[]>;
    getUsers(): usersName[];
}
