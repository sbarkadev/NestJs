import { CreatePostDto } from './createPost.dto';
import { FindOneParams } from './findOneParams';
import { PostService } from './post.service';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    getPosts(): Promise<import(".prisma/client").Post[]>;
    getPostById({ id }: FindOneParams): Promise<import(".prisma/client").Post>;
    createPost(post: CreatePostDto): Promise<import(".prisma/client").Post>;
}
