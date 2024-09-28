import userModel from "../../DB/models/User.model.js";
import { verifyToken } from "../utils/generateAndVirfyToken.js";



const auth = async(req,res,next)=>{
   try {
     const { authorization } = req.headers;
     if (!authorization?.startsWith(process.env.BEARER_KEY)) {
       return res.json({ message: "IN_VALID TOKEN || BEARER KEY" });
     }
     const token = authorization.split(process.env.BEARER_KEY)[1];
     const decoded = verifyToken({ token });
     if (!decoded?.id) {
       return res.json({ message: "IN_VALID TOKEN payload" });
     }
          const authUser = await userModel.findById(decoded.id).select('userName email status role')
     if (!authUser) {
       return res.json({ message: "not register account" });
     }
     req.user = authUser;
     return next();
   } catch (error) {
           return res.json({ message: "catch error ",error});

   }
}

export default auth