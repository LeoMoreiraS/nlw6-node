import {Request, Response,NextFunction} from 'express'
import { getCustomRepository } from 'typeorm';
import { UserRepositories } from '../repositories/UserRepositories';


async function  ensureAdmin(req:Request,res:Response,next:NextFunction){
    const {sub} = req.user;
    const usersRepositories = getCustomRepository(UserRepositories);
    const user  = await usersRepositories.findOne(sub);
    if(user.admin){
        return next();
    }
    return res.status(401).json({
        error: "Unauthorized",
    });
}

export {ensureAdmin}