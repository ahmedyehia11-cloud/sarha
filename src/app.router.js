import authRouter from './modules/Auth/auth.router.js'
import userRouter from "./modules/User/user.router.js";
import messageRouter from "./modules/Message/message.router.js";
import connectDB from '../DB/connection.js';
import { errorHandling } from './utils/errorHandling.js';
import path from 'path'    // >>>>>>1
import { fileURLToPath } from 'url';  // >>>>>>1
const __dirname = path.dirname(fileURLToPath(import.meta.url))  // >>>>>>1




const initApp=(app,express)=>{
    // convert buffer data
    app.use(express.json({}))

    app.use('/uploads',express.static(path.join(__dirname,'./uploads'))) // to can read the file || folder 1<<<< 
    // routing
    app.get("/", (req, res) => res.send("Hello World!"));
    
    app.use('/auth',authRouter)
    app.use("/user", userRouter)
    app.use("/message", messageRouter)

    app.all("*",(req,res,next)=>{
        return res.json({ message: "in_valid routing" });
    })

    //Error handling middleware
    app.use(errorHandling)

    // connection DB
    connectDB()

}
export default initApp