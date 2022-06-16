import { Controller } from "@nestjs/common";
import { AuthService } from "./auth.service";


@Controller()
export class AuthController {
    constructor (private authService : AuthService )
    {
        this.authService.test();
    }
}

/*
    import { Controller } from "@nestjs/common";
    import { AuthService } from "./auth.service";

    @Controller()
    export class AuthController {
        constructor() {
            const service = new AuthService();
        }
    }
*/

/* why we use private 

    import { Controller } from "@nestjs/common";
    import { AuthService } from "./auth.service";

    @Controller()
    export class AuthController {
        constructor (authService : AuthService )
        {
            this.authService = authService;
        }
    }
*/