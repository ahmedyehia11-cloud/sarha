import multer from "multer";

export const fileValidation = {   
    image:['image/jpg','image/jpeg','image/png','image/gif'],
    file:['application/pdf','application/msword',] 
  }
export function fileUpload (customValidation=[]){ 
const storage = multer.diskStorage({})
      function fileFilter(req,file,cb){ 
             if (customValidation.includes(file.mimetype)) {
              cb(null,true)
             }else{cb("IN_VALID FILE FORMAT",false)}
      }
  const upload = multer({fileFilter,storage})
  return upload 
} 

