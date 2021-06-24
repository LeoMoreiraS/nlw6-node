import {Request,Response } from "express"
import { CreateUserService } from "../services/CreateUserService";
import {hash} from "bcryptjs";
class CreateUserController{
    async handle(req:Request,res:Response){
            const{name,email,admin,password } = req.body;
    
            const createUserService = new CreateUserService();
            const passwordHash = await hash(password,8);
            const user = await createUserService.execute({name,email,admin,password:passwordHash});
    
            return res.json(user);
    }
}

export {CreateUserController};