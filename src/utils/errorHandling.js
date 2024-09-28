


export const asyncHandler = (fn)=>{
    return (req,res,next)=>{
        fn(req,res,next).catch(error=>{
            // return res.json({message:"catch error",
            //     error:error.stack
                      return next(new Error(error));
        })
    }
}


export const errorHandling = (err, req, res, next) => {
   if (err) {   if (process.env.MOOD == "dev") {
     return res.status(err.cause || 500).json({ message: err.message, error: err.stack });
   }
   return res
     .status(err.cause || 500)
     .json({ message: err.message });

    
   } 
 
};