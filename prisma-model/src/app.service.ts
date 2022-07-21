import { Body, Injectable } from '@nestjs/common';
import { MessageRoom, PrismaClient, Room, User, UserInRoom, } from '@prisma/client';
import { createRoom } from './DTO/create-room.dto';
import { createUser } from './DTO/create-users.dto';
import { usersName } from './DTO/users-name.dto';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
 constructor(private prisma :PrismaService) {}

  async createUser(fields : createUser): Promise<User> {
    let userCount = await this.prisma.user.count
    (
      {
        where : {
          username : fields.username
        }
      }
    )
   if (userCount != 0)
      return null;

    const createUser = await this.prisma.user.create({
      data : fields
    });
 
  return createUser;
}


async getusersName(): Promise<usersName[]> {
  const users = await this.prisma.user.findMany({
    select : {
      username : true
    },
  });
  return users;
}

async createRoom(user_name : string , fields : createRoom): Promise<UserInRoom> {

  let userCount = await this.prisma.room.count
  (
    {
      where : {
        name : fields.room_name
      }
    }
  )
  if (userCount != 0)
    return null;


  const createUserInRoom = await this.prisma.userInRoom.create
  ({
   
      data : {
        user : {
          connect : {
            
          }
        }
      }
  });
  // ({
  //     data : {
  //       user : {
  //         connect : {
  //           name : name ,
  //         },
  //       },
  //       room : {
  //         create : 
  //           {
  //            fields
  //           },
  //       },
  //       user_role : 'owner',
  //     }
  //     });
  return createUserInRoom;
}



async getUsersOfRoom(room_id : number  ): Promise<UserInRoom[]> {
  const userInRoom = await this.prisma.userInRoom.findMany({
    where : {roomId : room_id},
    include : {user :  true  }
  
  });
  
  return userInRoom;
}



async getRooms(user_id : number) //: Promise<Room> 
{
  const rooms = await this.prisma.userInRoom.findMany({
      where : {userId : user_id},
      select : {
        user_role : true,
        userId : false,
        roomId : false,
        room : {
          select : {
            name : true,
            type : true,
            users : false
          }
        }
      },

  });
  return rooms;

}


async addUserToRoom(room_id : number , user_id : number ): Promise<UserInRoom> {
  const createUserInRoom = await this.prisma.userInRoom.create({
      data : {
        user : {
          connect : {
            id : user_id ,
          },
        },
        room : {
          connect : {
            id : room_id
          },
        },
        user_role : 'user',
          
      }
      });
  return createUserInRoom;
}


async sendMessageToRoom(room_id : number , content_msg : string , user_id : number): Promise<MessageRoom> {
  const messageRoom = await this.prisma.messageRoom.create ({

    data : {
      from : user_id ,
      to_room : room_id,
      content_msg :content_msg,
      wasRead : true,
    },
  });
  
  return messageRoom;
}


async getMessages(room_id : number ): Promise<MessageRoom[]> {
  const messageRoom = await this.prisma.messageRoom.findMany ({
    where :{ to_room : room_id },
    orderBy : {id : 'desc' }
   

  });
  
  return messageRoom;
}






}