import { User, UserInRoom } from '@prisma/client';
import { AppService } from './app.service';
import { createRoom } from './DTO/create-room.dto';
import { createUser } from './DTO/create-users.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    createUser(fields: createUser): Promise<User>;
    getUsersName(): Promise<any>;
    createRoom(name: string, fields: createRoom): Promise<UserInRoom>;
}
