import { Controller, Get, Param, Render } from '@nestjs/common';
import { MessageRoom, User, UserInRoom } from '@prisma/client';
import { Console } from 'console';
import { AppService } from './app.service';
import { usersName } from './DTO/users-name.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {

  }

  // every user create account is added to database
  // create 5 users

  @Get('/createUsers')
  createUser()
  {
   
    //id : 1
    this.appService.createUser('token1','sbarka', 0 , 0 , 0);
    //id : 2
    this.appService.createUser('token2','ssghuri', 0 , 0 , 0);
    //id : 3
    this.appService.createUser('token3','assmaa', 0 , 0 , 0);
    //id : 4
    this.appService.createUser('token4','Alae', 0 , 0 , 0);
    //id : 5
    this.appService.createUser('token5','narine', 0 , 0 , 0);
    //id : 6
    this.appService.createUser('token6','mohammed', 0 , 0 , 0);
    //id : 7
    this.appService.createUser('token7','sara', 0 , 0 , 0);  
  }


// get name of users in the application
 @Get('/getUsersNames')
 async getUsersNames()  
  {
      let users ;
       await this.appService.getusersNames().then(value => {
        users = value; 
      });
      return users;
  }

  // create rooms  by some users (owners of room)
  @Get('/createRooms')
  createRoom(): void 
  {
    // user id : 2 (ssghuri) create room_id: 1
    this.appService.createRoom(2, 'room1', 'PUB','');
    // user id : 1 (sbarka) create room_id: 2
    this.appService.createRoom(1, 'room2', 'PUB','');
    // user id : 3 (assmaa)  create room_id: 3
    this.appService.createRoom(3, 'room3', 'PROT','123456789');
  }

  @Get('/addUsers/:id_room/:id_user')
  addUserToRoom(@Param('id_room') room  , @Param('id_user') user): void 
  {
    this.appService.addUserToRoom(room, user);

 
  }


  @Get('/getRooms/:id')
  getRooms(@Param('id') id )
  {
    return this.appService.getRooms(parseInt(id));
  }




  @Get('/usersOfRoom')
  getUserOfRoom(): Promise<UserInRoom[]>
  {
    return this.appService.getUsersOfRoom(2)
  }

  @Get('/sendMessage')
  sendMessageToRoom(): void
  {
    this.appService.sendMessageToRoom(2,'hi guys',1);
    this.appService.sendMessageToRoom(2,'how are uu ???',1);

    this.appService.sendMessageToRoom(2,'fine and you?',4);
    this.appService.sendMessageToRoom(2,'alaa slamaa zyomnat',6);


    this.appService.sendMessageToRoom(1,'salam',3);
    this.appService.sendMessageToRoom(1,'salam labass ?',5);

    
  }

  @Get('/getMessages')
  getMessages(room_id : number): Promise<MessageRoom[]>
  {
    return this.appService.getMessages(2);
  }


}

