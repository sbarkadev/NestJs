import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

/* here we create our logic that connects to teh database */
@Injectable()
export class PrismaService extends PrismaClient{
    constructor(){
        super({
            datasources : {
                db: {
                    url: 'postgresql://postgres:123@192.168.99.101:5434/nest?schema=public'
                },
            },
        });
    }
}
