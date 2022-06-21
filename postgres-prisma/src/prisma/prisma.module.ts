import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

/* create a module that exports the above service. */

@Module({
    imports: [],
    controllers: [],
    providers: [PrismaService],
    exports: [PrismaService],
})
export class PrismaModule {}
