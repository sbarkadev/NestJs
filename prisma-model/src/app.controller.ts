import { Body, Controller, Get, Param, Post, Render } from '@nestjs/common';
import { MessageRoom, User, UserInRoom } from '@prisma/client';
import { Console } from 'console';
import { AppService } from './app.service';
import { createRoom } from './DTO/create-room.dto';
import { createUser } from './DTO/create-users.dto';
import { usersName } from './DTO/users-name.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {

  }
  // create a single user 
  @Post('/createUser')
  createUser(@Body() fields : createUser)
  {
    return this.appService.createUser(fields);
  }


// get name of users
 @Get('/getUsersName')
 async getUsersName()  
  {
      let users ;
      await this.appService.getusersName().then(value => {
        users = value; 
      });
      return users;
  }

  @Post('/createRoom/:user_name')
  async createRoom(@Param('user_name') name :string , @Body() fields : createRoom )
  {
    return this.appService.createRoom(name,fields);
  }

  @Post('/addUsers/:user_name/:room_name')
  addUserToRoom(@Param('room_name') room  , @Param('user_name') user): void 
  {
    this.appService.addUserToRoom(room,user);

  }


  // @Get('/getRooms/:id')
  // // user 1  => room2 (owner)
  // // user 2 => room1 (owner) +  room2 + room3
  // // user 3 => room3(owner) + room1
  // // user 7 => room1 + room2
  // getRooms(@Param('id') id )
  // {
  //   return this.appService.getRooms(parseInt(id));
  // }




  // @Get('/usersOfRoom/:id')
  // //users of room1 = 2 - 3 -7
  // //users of room2 = 1 - 2 - 7
  // //users of room3 = 3 - 2
  // getUserOfRoom(@Param('id') id): Promise<UserInRoom[]>
  // {
  //   return this.appService.getUsersOfRoom(parseInt(id));
  // }

  // @Get('/sendMessage')
  // // room id  - user id 
  // sendMessageToRoom(): void
  // {
  //   this.appService.sendMessageToRoom(2,'hi guys',1);
  //   this.appService.sendMessageToRoom(2,'how are uu ???',1);

  //   this.appService.sendMessageToRoom(2,'fine and you?',7);
  //   this.appService.sendMessageToRoom(2,'alaa slamaa zyonat',2);


  //   this.appService.sendMessageToRoom(1,'salam',3);
  //   this.appService.sendMessageToRoom(1,'salam labass ?',7);

    
  // }


  // @Get('/getMessages/:id')
  // getMessages(@Param('id') room_id): Promise<MessageRoom[]>
  // {
  //   return this.appService.getMessages(parseInt(room_id));
  // }


}

