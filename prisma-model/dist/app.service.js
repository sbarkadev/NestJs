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
    async createUser(token42_api, username, losses, wins, ladder_level) {
        const createUser = await this.prisma.user.create({
            data: {
                token42_api: token42_api,
                username: username,
                losses: losses,
                wins: wins,
                ladder_level: ladder_level,
            }
        });
        return createUser;
    }
    async createRoom(user_id, room_name, room_type, pass) {
        const createUserInRoom = await this.prisma.userInRoom.create({
            data: {
                user: {
                    connect: {
                        id: user_id,
                    },
                },
                room: {
                    create: {
                        name: room_name,
                        type: room_type,
                        password: pass
                    },
                },
                user_role: 'owner',
            }
        });
        return createUserInRoom;
    }
    async addUserToRoom(room_id, user_id) {
        const createUserInRoom = await this.prisma.userInRoom.create({
            data: {
                user: {
                    connect: {
                        id: user_id,
                    },
                },
                room: {
                    connect: {
                        id: room_id
                    },
                },
                user_role: 'user',
            }
        });
        return createUserInRoom;
    }
    async getUsersOfRoom(room_id) {
        const userInRoom = await this.prisma.userInRoom.findMany({
            where: { roomId: room_id },
            include: { user: true }
        });
        return userInRoom;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map