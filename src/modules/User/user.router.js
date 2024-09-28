import { Router } from "express";
import * as userController from "./controller/user.js";
import auth from "../../middleware/auth.middleware.js";
import * as validators from "./user.validation.js"
import validation from "../../middleware/validation.js";
import { fileUpload, fileValidation } from "../../utils/cloudMulter.js";
const router = Router();   //          customPath        mimeType                 key in form data in post man
//when multer pc //router.patch('/profilePic',fileUpload('user/profile',fileValidation.image).single('image'),auth,userController.profilePic)
//when multer pc //router.patch('/profileCovPic',fileUpload('user/profile/cover',fileValidation.image).array('image',5),auth,userController.profileCovPic)
router.patch('/profilePic',auth,fileUpload(fileValidation.image).single('image'),userController.profilePic)
router.patch('/profileCovPic',fileUpload(fileValidation.image).array('image',5),auth,userController.profileCovPic)

router.get("/", userController.getUserModule)
router.get('/profile',auth,userController.profile)
router.patch("/password",validation(validators.updatePassword),auth,userController.updatePassword)
router.get("/:id/profile",validation(validators.shareProfile),userController.shareProfile)

export default router;