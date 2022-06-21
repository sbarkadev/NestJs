import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './createPost.dto';
import { PostNotFoundException } from './postNotFound.exception';


@Injectable()
export class PostService 
{
    constructor(private readonly prismaService : PrismaService){}

    async getPosts() {
        return this.prismaService.post.findMany();
    }
    async createPost(post: CreatePostDto){
        return this.prismaService.post.create({
            data: post,
        });
    }
    async getPostById(id : number) {
        const post = await this.prismaService.post.findUnique({
            where :{
                id,
            },
        });
        if(!post){
            throw new PostNotFoundException(id);
        }
        return post;
      
    }
}
