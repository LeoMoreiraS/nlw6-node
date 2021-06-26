import {Request,Response } from "express"

import { ListUserSenderComplimentsService } from "../services/ListUserSenderComplimentsService";

class ListUserSenderComplimentsController{
    async handle(req:Request,res:Response){
            const{sub } = req.user;
    
            const listUserSenderComplimentsService = new ListUserSenderComplimentsService();
            const compliments = await listUserSenderComplimentsService.execute(sub);
    
            return res.json(compliments);
    }
}

export {ListUserSenderComplimentsController};