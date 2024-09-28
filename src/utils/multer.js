// import multer from "multer";
// import { nanoid } from "nanoid"; // nanoid to make your fileName is unique put it before file.originalname >>>>2
// // this step path and url and dirName to know where Iam in folders || files and continue down 
// // use path.join(), because continue the fullPath () >>>>>>>1  
// import fs from "fs"//fs is a file system module in node for check if i have this folder and if not have will created>>>>3
// import path from 'path' //>>>>>>>>1
// import { fileURLToPath } from "url"//>>>>>>>>>>>1
// const __dirName = path.dirname(fileURLToPath(import.meta.url))//>>>>>>>>>1
// export const fileValidation = {   //>>>>>>>4
//   image:['image/jpg','image/jpeg','image/png','image/gif'],
//   file:['application/pdf','application/msword',] 
// }
// export function fileUpload (customPath='general',customValidation=[]){ //>>>>4
//  // console.log({name:__dirName});
//   const fullPath = path.join(__dirName,`../uploads/${customPath}`) // 1<<<<<<<<<<<
// //console.log({name:fullPath});
//       if (!fs.existsSync(fullPath)) {    //  check first if i don't have the file    3<<<<<<
//         fs.mkdirSync(fullPath,{recursive:true}) //  create the file    3<<<<<<
//       }
//   const storage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//             cb(null,fullPath)     
//     },
//     filename:(req,file,cb)=>{
//         const uniqueFileName = nanoid()+"_"+ file.originalname    
//         file.dest =  `/uploads/${customPath}/${uniqueFileName}`//dah 3shan astlm mno al link al hakhzno fl Db fe al function bta3ty 
//       cb(null,uniqueFileName) // 2<<<<<<
//     }
//   })
//       function fileFilter(req,file,cb){  // function to validate because don't upload any file 4<<<<<<< 
//              if (customValidation.includes(file.mimetype)) {
//               cb(null,true)
//              }else{cb("IN_VALID FILE FORMAT",false)}
//       }
//   const upload = multer({fileFilter,storage})
//   return upload 
// } 
















