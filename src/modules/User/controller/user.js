import userModel from "../../../../DB/models/User.model.js";
import cloudinary from "../../../utils/cloudinary.js";
import { asyncHandler } from "../../../utils/errorHandling.js";
import { compare, hash } from "../../../utils/hashAndcompare.js";


export const profilePic = asyncHandler(async(req,res,next)=>{

  if (!req.file) {
    return next(new Error('file is required',{cause:400}))
  }
      const {secure_url,public_id} = await cloudinary.uploader.upload(req.file.path,{folder:`user/${req.user._id}/profile`}) 
  const user =await userModel.findByIdAndUpdate(req.user._id,{profilePic:secure_url,profilePicId:public_id},{new:false})
   await cloudinary.uploader.destroy(user.profilePicId)
return res.json({message:"done",user })
 

})

export const profileCovPic = asyncHandler( async(req,res,next)=>{
  if(!req.files?.length){
    return next(new Error('file is required',{case:400}))
  }
  const coverPic = []
  for (const file of req.files) {
    const {secure_url,public_id} = await cloudinary.uploader.upload(file.path,{folder:`user/${req.user._id}/profile/cover`}) 

    coverPic.push({secure_url,public_id})
  }
  const user = await userModel.findByIdAndUpdate(req.user._id,{coverPic},{new:false})
  return res.json({message:"done",user})
}
)




export const getUserModule =async (req, res, next) => {
  const users =await userModel.find({})
  res.json({ message: "user module",users });
};

export const profile =async (req,res,next)=>{

  const user=await userModel.findById(req.user._id)
  if (!user) {
    return res.json({message:'IN_VALID USER'})
  }
      return res.json({ message: "profile",user});

} 

export const updatePassword =asyncHandler(async (req,res,next)=>{

    const {oldPassword,newPassword} = req.body
    const user = await userModel.findById(req.user._id)
       const match =compare({planText:oldPassword,hashValue:user.password})
       if (!match) {
             return next(new Error("in_valid old password",{cause:400}))
       }
         const hashPassword = hash({planText:newPassword,saltRound:8})
         user.password = hashPassword
         await user.save()
         return res.status(200).json({message:"done",newPassword:user.password})
})

export const shareProfile = asyncHandler(async(req,res,next)=>{
  const user = await userModel.findById(req.params.id).select('userName email profilePic firstName lastName ')
      return user ? res.status(200).json({message:"done",user})
                  : next(new Error ('IN_valid account ID',{cause:400}))
}
)