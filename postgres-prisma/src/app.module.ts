import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { PostService } from './post/post.service';
import { PostController } from './post/post.controller';

@Module({
  imports: [PrismaModule],
  controllers: [AppController, PostController],
  providers: [AppService,  PrismaService, PostService],
})
export class AppModule {}
