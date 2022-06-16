import { Injectable } from "@nestjs/common";

/* the service will be busy to the business logic like connecting to the database , editing the fields*/
@Injectable({})
export class AuthService {
    signup(){
        return {msg: 'I have signed up'};
    }

    signin(){
        return {msg: 'I have signed in'};
    }
}