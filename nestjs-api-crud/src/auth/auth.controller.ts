import { Controller, Post, Request } from "@nestjs/common";
import { AuthService } from "./auth.service";


@Controller('auth')
export class AuthController {
    constructor (private authService : AuthService ){}


    @Post('signup')
    /* using the express way */
    /* express Request object */
    signup(@Request() req : Request){
        //console.log(req);
        console.log(req.body);
        return this.authService.signup();
    }

    @Post('signin')
    signin(){
     
        return this.authService.signin();
    }
 
}

