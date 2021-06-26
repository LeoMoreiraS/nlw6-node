import { compare } from "bcryptjs";
import {sign } from "jsonwebtoken";
import { getCustomRepository }from "typeorm"
import { UserRepositories } from "../repositories/UserRepositories"
interface IAuthenticateRequest{
    email:string;
    password:string;
}

class AuthenticateUserService{
    async execute({email,password}:IAuthenticateRequest){
        const usersRepositories = getCustomRepository(UserRepositories);

        if(!email||!password){
            throw new Error("Email or password incorrect");
        }

        const user = await usersRepositories.findOne({
            email,
        });
        if(!user){
            throw new Error("Email or password incorrect");
        }
        const passwordMatch =await compare(password, user.password);

        if(!passwordMatch){
            throw new Error("Email or password incorrect")
        }
        const token = sign({
            email:user.email,
            name:user.name
        },"3213123712371273",{
            subject : user.id,
            expiresIn: "1d",
        });
        return token;
    }
}
export { AuthenticateUserService };