import { getCustomRepository }from "typeorm"
import { ComplimentRepositories } from "../repositories/ComplimentsRepositories";
import { UserRepositories } from "../repositories/UserRepositories"


class ListUserSenderComplimentsService{
    async execute(id:string){
        const complimentRepositories = getCustomRepository(ComplimentRepositories);

        if(!id){
            throw new Error("id not found");
        }

        const compliments = await complimentRepositories.find({
            where:{
                user_sender: id
            },relations:[
                "userSender",
                "userReceiver",
                "tag"
            ]
        });
        
        return compliments;
    }
}
export { ListUserSenderComplimentsService };