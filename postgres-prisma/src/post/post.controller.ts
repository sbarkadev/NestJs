import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePostDto } from './createPost.dto';
import { FindOneParams } from './findOneParams';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService){}
    @Get()
    async getPosts(){
        return this.postService.getPosts();
    }

    @Get(':id')
   async getPostById(@Param() { id} : FindOneParams){
    return this.postService.getPostById(Number(id));
   }

   @Post()
   async createPost(@Body() post : CreatePostDto) {
    return this.postService.createPost(post);
   }
}
