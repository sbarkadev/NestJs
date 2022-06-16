import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

/* prisma service will be available to all the modules in our app */
@Global()
@Module({
  providers: [PrismaService],
  /* export PrismaService to other providers */
  exports : [PrismaService]
})
export class PrismaModule {}
