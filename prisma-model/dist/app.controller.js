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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const create_room_dto_1 = require("./DTO/create-room.dto");
const create_users_dto_1 = require("./DTO/create-users.dto");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    createUser(fields) {
        return this.appService.createUser(fields);
    }
    async getUsersName() {
        let users;
        await this.appService.getusersName().then(value => {
            users = value;
        });
        return users;
    }
    async createRoom(name, fields) {
        return this.appService.createRoom(2, 'room1', 'PUB', '');
    }
    addUserToRoom(room, user) {
        this.appService.addUserToRoom(parseInt(room), parseInt(user));
    }
    getRooms(id) {
        return this.appService.getRooms(parseInt(id));
    }
    getUserOfRoom(id) {
        return this.appService.getUsersOfRoom(parseInt(id));
    }
    sendMessageToRoom() {
        this.appService.sendMessageToRoom(2, 'hi guys', 1);
        this.appService.sendMessageToRoom(2, 'how are uu ???', 1);
        this.appService.sendMessageToRoom(2, 'fine and you?', 7);
        this.appService.sendMessageToRoom(2, 'alaa slamaa zyonat', 2);
        this.appService.sendMessageToRoom(1, 'salam', 3);
        this.appService.sendMessageToRoom(1, 'salam labass ?', 7);
    }
    getMessages(room_id) {
        return this.appService.getMessages(parseInt(room_id));
    }
};
__decorate([
    (0, common_1.Post)('/createUser'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_users_dto_1.createUser]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)('/getUsersName'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getUsersName", null);
__decorate([
    (0, common_1.Get)('/createRoom/:user_name'),
    __param(0, (0, common_1.Param)('user_name')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_room_dto_1.createRoom]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createRoom", null);
__decorate([
    (0, common_1.Get)('/addUsers/:id_room/:id_user'),
    __param(0, (0, common_1.Param)('id_room')),
    __param(1, (0, common_1.Param)('id_user')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "addUserToRoom", null);
__decorate([
    (0, common_1.Get)('/getRooms/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getRooms", null);
__decorate([
    (0, common_1.Get)('/usersOfRoom/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getUserOfRoom", null);
__decorate([
    (0, common_1.Get)('/sendMessage'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "sendMessageToRoom", null);
__decorate([
    (0, common_1.Get)('/getMessages/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getMessages", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map