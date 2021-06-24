import { getCustomRepository }from "typeorm"
import { ComplimentRepositories } from "../repositories/ComplimentsRepositories"
import { TagRepositories } from "../repositories/TagRepositories";
import { UserRepositories } from "../repositories/UserRepositories";
interface IComplimentRequest{
    tag_id:string;
    user_sender:string;
    user_receiver:string;
    message:string;
}

class CreateComplimentService{
    async execute({tag_id,user_sender,user_receiver,message}:IComplimentRequest){
        const complimentRepositories = getCustomRepository(ComplimentRepositories);
        const tagRepositories = getCustomRepository(TagRepositories);
        const usersRepositories = getCustomRepository(UserRepositories);
        if(!tag_id||!user_receiver||!user_sender||!message){
            throw new Error("Empty field");
        }
        if(user_receiver==user_sender){
            throw new Error("User invalid");
        }
        const tagReceiverExists = await tagRepositories.findOne(tag_id);
        if(!tagReceiverExists){
            throw new Error("Tag don't exist")
        }
        const userReceiverExists = await usersRepositories.findOne(user_receiver);
        
        if(!userReceiverExists){
            throw new Error("User receiver don't exist");
        }
        const compliment = complimentRepositories.create({
            tag_id,
            user_sender,
            user_receiver,
            message
        });
        await complimentRepositories.save(compliment);
        return compliment;
    }
}
export { CreateComplimentService };