import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from './createPost.dto';
export declare class PostService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getPosts(): Promise<import(".prisma/client").Post[]>;
    createPost(post: CreatePostDto): Promise<import(".prisma/client").Post>;
    getPostById(id: number): Promise<import(".prisma/client").Post>;
}
