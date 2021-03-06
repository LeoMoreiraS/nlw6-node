import { CreateComplimentService } from "../services/CreateComplimentService"
import {Request,Response} from "express";
class CreateComplimentController{
    async handle(req:Request,res:Response) {
        const { tag_id,user_receiver,message } = req.body;
        const user_sender = req.user.sub;
        const createComplimentService = new CreateComplimentService();
        const compliment = await createComplimentService.execute({
            tag_id,
            user_sender,
            user_receiver,
            message,
        });
        return res.json(compliment);
    }
}

export { CreateComplimentController}