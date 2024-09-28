 import mongoose from "mongoose"



 const connectDB=async()=>{
return await mongoose
  .connect(process.env.DB_LOCAL)
  .then((result) => {
    console.log(`Db connected successfully ✔️`);
  })
  .catch((err) => {
    console.log(`fail to connect DB >>>>>>>${err}`);
  });
 }

 export default connectDB