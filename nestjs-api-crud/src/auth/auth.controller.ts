import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";


//@Controller()
// put a global prefix route
// the controller will handle the reuqest , it wwill fetch the body 
//of the request if needed , check headers, any work related to teh request
@Controller('auth')
export class AuthController {
    constructor (private authService : AuthService ){}

    //create endpoint for login using decorators : expect Post request
    // to make it a route we need to annotate it with post decorator that comes from nestjs/common 
    
    // POST /auth/signup
    @Post('signup')
    signup(){
        // nest js will automatically convert the data type based on the return 
        // return { msg: "Hello wolrd"};
        //return 'I am signed up';
        return this.authService.signup();
    }

    @Post('signin')
    signin(){
        //return 'I am sign in';
        return this.authService.signin();
    }
    //create endpoint for signup : expect Post request
}

