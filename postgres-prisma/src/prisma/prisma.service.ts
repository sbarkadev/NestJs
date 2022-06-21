import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient
implements OnModuleInit , OnModuleDestroy {
    /* 
        The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style,
        avoiding the need to explicitly configure promise chains.
    */
    async onModuleInit() {
        await this.$connect();
    }
    async onModuleDestroy() {
        await this.$disconnect();
    }
}

