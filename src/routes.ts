import { Router} from "express";
import { AuthenticateUserController } from "./controllers/AuthenticaUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUserController } from "./controllers/ListUserController";
import { ListUserReceiverComplimentsController } from "./controllers/ListUserReceiverComplimentsController";
import { ListUserSenderComplimentsController } from "./controllers/ListUserSenderComplimentsController";
import { ensureAdmin } from "./middlewares/ensureAdmin"
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserReceiverComplimentsService } from "./services/ListUserReceiverComplimentsService";
const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserReceiverComplimentsController = new ListUserReceiverComplimentsController(); 
const listUserSenderComplimentsController = new ListUserSenderComplimentsController();
const listTagsController = new ListTagsController();
const listUserController = new ListUserController();

router.post("/users",createUserController.handle);
router.post("/login",authenticateUserController.handle)
router.post("/tags",ensureAuthenticated,ensureAdmin,createTagController.handle);
router.post("/compliments",ensureAuthenticated,createComplimentController.handle)
router.get("/sender",ensureAuthenticated,listUserSenderComplimentsController.handle);
router.get("/receiver",ensureAuthenticated,listUserReceiverComplimentsController.handle);
router.get("/tags",listTagsController.handle);
router.get("/users",ensureAuthenticated,listUserController.handle);
export { router };