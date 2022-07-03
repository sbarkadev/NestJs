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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    createUser() {
        this.appService.createUser('token1', 'sbarka', 0, 0, 0);
        this.appService.createUser('token2', 'ssghuri', 0, 0, 0);
        this.appService.createUser('token3', 'assmaa', 0, 0, 0);
        this.appService.createUser('token4', 'Alae', 0, 0, 0);
        this.appService.createUser('token5', 'narine', 0, 0, 0);
        this.appService.createUser('token6', 'mohammed', 0, 0, 0);
        this.appService.createUser('token7', 'sara', 0, 0, 0);
    }
    createRoom() {
        this.appService.createRoom(2, 'room1', 'PUB', '');
        this.appService.createRoom(1, 'room2', 'PUB', '');
        this.appService.createRoom(3, 'room3', 'PROT', '123456789');
    }
    addUserToRoom() {
        this.appService.addUserToRoom(2, 4);
        this.appService.addUserToRoom(2, 6);
        this.appService.addUserToRoom(1, 7);
        this.appService.addUserToRoom(1, 5);
    }
    getUserOfRoom() {
        return this.appService.getUsersOfRoom(2);
    }
    sendMessageToRoom() {
        this.appService.sendMessageToRoom(2, 'hi guys', 1);
        this.appService.sendMessageToRoom(2, 'how are uu ???', 1);
        this.appService.sendMessageToRoom(2, 'fine and you?', 4);
        this.appService.sendMessageToRoom(2, 'alaa slamaa zyomnat', 6);
        this.appService.sendMessageToRoom(1, 'salam', 3);
        this.appService.sendMessageToRoom(1, 'salam labass ?', 5);
    }
};
__decorate([
    (0, common_1.Get)('/createUsers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)('/createRooms'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "createRoom", null);
__decorate([
    (0, common_1.Get)('/addUsers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "addUserToRoom", null);
__decorate([
    (0, common_1.Get)('/usersOfRoom'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getUserOfRoom", null);
__decorate([
    (0, common_1.Get)('/sendMessage'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "sendMessageToRoom", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map