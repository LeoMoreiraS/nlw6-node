import {Request,Response } from "express"
import { ListUserReceiverComplimentsService } from "../services/ListUserReceiverComplimentsService";

class ListUserReceiverComplimentsController{
    async handle(req:Request,res:Response){
            const{sub } = req.user;
    
            const listUserReceiverComplimentsService = new ListUserReceiverComplimentsService();
            const compliments = await listUserReceiverComplimentsService.execute(sub);
    
            return res.json(compliments);
    }
}

export {ListUserReceiverComplimentsController};