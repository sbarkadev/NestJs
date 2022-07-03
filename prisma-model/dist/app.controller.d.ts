import { UserInRoom } from '@prisma/client';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    createUser(): void;
    createRoom(): void;
    addUserToRoom(): void;
    getUserOfRoom(): Promise<UserInRoom[]>;
    sendMessageToRoom(): void;
}
