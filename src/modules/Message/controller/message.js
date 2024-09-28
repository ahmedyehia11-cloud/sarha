import messageModel from "../../../../DB/models/Message.model.js";
import userModel from "../../../../DB/models/User.model.js";
import { asyncHandler } from "../../../utils/errorHandling.js";


export const getMessageModule =asyncHandler( async (req, res, next) => {
 const messageList = await messageModel.find({receiverId:req.user._id})
     return res.json({message:"done",messageList})
})

export const sendMessage =asyncHandler( async (req,res,next)=>{
  const {receiverId}=req.params
  const {message}=req.body

  const user = await userModel.findById(receiverId)
    
  if (!user) {
    return next(new Error("In_valid account ID",{cause:404}))
  }
      const createMessage=await messageModel.create({receiverId:user._id,message})
      return res.status(201).json({message:"done✅",createMessage})
}
)


export const deleteMessage =asyncHandler(async(req,res,next)=>{
  const {id} = req.params
   const message = await messageModel.deleteOne({_id:id,receiverId:req.user._id})
   if (!message) {
    return next(new Error("In_valid message ID or ownerId ",{cause:404}))
   }
   return res.status(201).json({message:"done✅"})

}

)