

 
const dataMethods=['body','query','params','headers']
 const validation = (schema)=>{
   return (req,res,next)=>{ 
    const validationArr=[]
    
    dataMethods.forEach(key => {
        if (schema[key]) {
            const validateResult = schema[key].validate(req[key],{abortEarly:false})
            
            if (validateResult.error) {
                validationArr.push(validateResult.error.details)
            }
        
        }
        
    });
         
        if (validationArr.length>0) {
             return res.json({message:"validation error",validationArr})            
        }
         else {
            return next()
        }
  }
 }
 export default validation 