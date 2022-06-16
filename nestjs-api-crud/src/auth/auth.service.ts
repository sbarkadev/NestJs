import { Injectable } from "@nestjs/common";
import { User , Bookmark } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
//User and Bookmark are exportable as typescript types from prisma/client

/* the service will be busy to the business logic like connecting to the database , editing the fields*/
@Injectable()
export class AuthService {
    constructor (private prisma: PrismaService) {}
    
    signup(){
        //create of a user
        return {msg: 'I have signed up'};
    }

    signin(){
        return {msg: 'I have signed in'};
    }
}