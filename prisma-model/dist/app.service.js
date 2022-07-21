"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma/prisma.service");
let AppService = class AppService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createUser(fields) {
        let userCount = await this.prisma.user.count({
            where: {
                username: fields.username
            }
        });
        if (userCount != 0)
            return null;
        const createUser = await this.prisma.user.create({
            data: fields
        });
        return createUser;
    }
    async getusersName() {
        const users = await this.prisma.user.findMany({
            select: {
                username: true
            },
        });
        return users;
    }
    async createRoom(user_name, fields) {
        let userCount = await this.prisma.room.count({
            where: {
                name: fields.room_name
            }
        });
        if (userCount != 0)
            return null;
        const createUserInRoom = await this.prisma.userInRoom.create({
            data: {
                user: {
                    connect: {
                        username: user_name
                    },
                },
                room: {
                    create: {
                        name: fields.room_name,
                        type: fields.room_type,
                        password: fields.password
                    },
                },
                user_role: 'owner',
            }
        });
        return createUserInRoom;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map