import { Router } from "express";
import * as authController from './controller/auth.js'
import validation from "../../middleware/validation.js";
import * as validators from "./auth.validation.js"
const router = Router()


router.get('/',authController.getAuthModule)
router.post('/signUp',validation(validators.signUpSchema),authController.signUp)
router.post("/logIn",validation(validators.logInSchema),authController.logIn)
router.get('/confirmEmail/:token',authController.confirmEmail)
router.get('/newConfirmEmail/:token',authController.newConfirmEmail)



export default router