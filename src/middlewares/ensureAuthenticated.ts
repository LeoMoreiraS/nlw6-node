import {Request, Response,NextFunction} from 'express'
import { verify } from "jsonwebtoken";
interface IUser {
    name:string,
    email:string,
    sub:string
}
function ensureAuthenticated(req:Request,res:Response,next:NextFunction){
    const authToken = req.headers.authorization;
    if(!authToken){
        return res.status(401).end();
    }
    const [,token] = authToken.split(" ");
    try { 
        const {name,email,sub} = verify(token,process.env.SECRET) as IUser;
        
        const user:IUser={
            name: name,
            email:email,
            sub:sub
        }
        req.user = user;
        return next();
    } catch (error) {
        return res.status(401).end();
    }
    
}

export {ensureAuthenticated}