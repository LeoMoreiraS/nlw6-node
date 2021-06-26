import {ListUserService} from "../services/ListUserService";
import {Request, Response} from "express";

class ListUserController{
    async handle(req: Request, res: Response){

        const listUserService = new ListUserService();
        const user = await listUserService.execute();
        return res.json(user);
    }

}

export { ListUserController }