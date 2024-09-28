import { Router } from "express";
import * as messageController from "./controller/message.js";
import auth from "../../middleware/auth.middleware.js";
import * as valuators from './message.validation.js'
import validation from "../../middleware/validation.js";
const router = Router();

router.get("/",auth,messageController.getMessageModule)
router.post('/:receiverId',validation(valuators.sendMessage),messageController.sendMessage)
router.delete("/:id",validation(valuators.deleteMessage),auth,messageController.deleteMessage)


export default router;