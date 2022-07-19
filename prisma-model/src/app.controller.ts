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
  async createRoom()
  {
    // user id : 2 (ssghuri) create room_id: 1
    await this.appService.createRoom(2, 'room1', 'PUB','');
    // user id : 1 (sbarka) create room_id: 2
    await this.appService.createRoom(1, 'room2', 'PUB','');
    // user id : 3 (assmaa)  create room_id: 3
    await this.appService.createRoom(3, 'room3', 'PROT','123456789');
  }

  @Get('/addUsers/:id_room/:id_user')
  // add user 2 to room2 and room3
  // add user 3 to room1
  // add user 7 to room1 and room2
  addUserToRoom(@Param('id_room') room  , @Param('id_user') user): void 
  {
    this.appService.addUserToRoom(parseInt(room), parseInt(user));

 
  }


  @Get('/getRooms/:id')
  // user 1  => room2 (owner)
  // user 2 => room1 (owner) +  room2 + room3
  // user 3 => room3(owner) + room1
  // user 7 => room1 + room2
  getRooms(@Param('id') id )
  {
    return this.appService.getRooms(parseInt(id));
  }




  @Get('/usersOfRoom/:id')
  //users of room1 = 2 - 3 -7
  //users of room2 = 1 - 2 - 7
  //users of room3 = 3 - 2
  getUserOfRoom(@Param('id') id): Promise<UserInRoom[]>
  {
    return this.appService.getUsersOfRoom(parseInt(id));
  }

  @Get('/sendMessage')
  // room id  - user id 
  sendMessageToRoom(): void
  {
    this.appService.sendMessageToRoom(2,'hi guys',1);
    this.appService.sendMessageToRoom(2,'how are uu ???',1);

    this.appService.sendMessageToRoom(2,'fine and you?',7);
    this.appService.sendMessageToRoom(2,'alaa slamaa zyonat',2);


    this.appService.sendMessageToRoom(1,'salam',3);
    this.appService.sendMessageToRoom(1,'salam labass ?',7);

    
  }


  @Get('/getMessages/:id')
  getMessages(@Param('id') room_id): Promise<MessageRoom[]>
  {
    return this.appService.getMessages(parseInt(room_id));
  }


}

