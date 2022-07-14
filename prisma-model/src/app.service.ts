import { Injectable } from '@nestjs/common';
import { MessageRoom, PrismaClient, Room, User, UserInRoom, } from '@prisma/client';
import { usersName } from './DTO/users-name.dto';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
 constructor(private prisma :PrismaService) {}

  async createUser(token42_api : string , username : string , losses : number , wins : number ,ladder_level : number): Promise<User> {
    const createUser = await this.prisma.user.create({
      data : {
        token42_api : token42_api ,
        username : username,
        losses : losses,
        wins : wins,
        ladder_level : ladder_level,
      }
  });
  return createUser;
}

async createRoom(user_id : number , room_name : string , room_type : string , pass : string): Promise<UserInRoom> {
  const createUserInRoom = await this.prisma.userInRoom.create({
      data : {
        user : {
          connect : {
            id : user_id ,
          },
        },
        room : {
          create : 
            {
              name : room_name,
              type : room_type,
              password : pass
            },
        },
        user_role : 'owner',
          
      }
      });
  return createUserInRoom;
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

async getUsersOfRoom(room_id : number  ): Promise<UserInRoom[]> {
    const userInRoom = await this.prisma.userInRoom.findMany({
      where : {roomId : room_id},
      include : {user :  true  }
    
    });
    
    return userInRoom;
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


async getusers(): Promise<usersName[]> {
  const users = await this.prisma.user.findMany({
    select : {
      username : true
    },
  });
  return users;
}

}



