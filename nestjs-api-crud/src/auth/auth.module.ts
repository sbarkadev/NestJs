
import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

  @Module({
    // add controller and provider to the Module
    controllers: [AuthController],
    providers: [AuthService],
  })
  export class AuthModule {} 

















/* Minimum requirement to create a module  */
/*
    import { Module } from "@nestjs/common";

    @Module({})
    export class AuthModule {} 
*/

/*
without export the class will be available only inside that module file
with export we allow other file to use it 
*/