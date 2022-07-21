import { User, UserInRoom } from '@prisma/client';
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
}
