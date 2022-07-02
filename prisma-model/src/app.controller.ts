import { Controller, Get } from '@nestjs/common';
import { User, UserInRoom } from '@prisma/client';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/createUsers')
  createUser(): void 
  {
    // create 3 users 
    this.appService.createUser('token1','sbarka', 0 , 0 , 0);
    this.appService.createUser('token2','ssghuri', 0 , 0 , 0);
    this.appService.createUser('token3','assmaa', 0 , 0 , 0);

    this.appService.createUser('token4','Alae', 0 , 0 , 0);
    this.appService.createUser('token5','narine', 0 , 0 , 0);
    this.appService.createUser('token6','mohammed', 0 , 0 , 0);
    this.appService.createUser('token7','sara', 0 , 0 , 0);
  }

  @Get('/createRooms')
  createRoom(): void 
  {
    this.appService.createRoom(2, 'room1', 'PUB','');
    this.appService.createRoom(1, 'room2', 'PUB','');
    this.appService.createRoom(3, 'room3', 'PROT','123456789');
  }


  @Get('/addUsers')
  addUserToRoom(): void 
  {
    this.appService.addUserToRoom(2, 4);
    this.appService.addUserToRoom(2, 6);
    this.appService.addUserToRoom(1, 7);
    this.appService.addUserToRoom(1, 5);
 
  }

  @Get('/usersOfRoom')
  getUserOfRoom(): Promise<UserInRoom[]>
  {
    return this.appService.getUsersOfRoom(2)
  }
}
