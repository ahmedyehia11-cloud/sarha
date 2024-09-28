import joi from 'joi'



export const signUpSchema = {
  body:joi.object({
    userName: joi.string().alphanum().min(3).max(30).required().messages({
      'string.empty':"please fill userName",
      "any.required":"userName is required"
    }),
    age:joi.number().required(),
    gender:joi.string().alphanum().valid("male","female").required(),
  
    email: joi.string().email({minDomainSegments:2,maxDomainSegments:3,tlds:{allow:["com",'net',"edu"]}}).required().messages({
      "string.email":"change email most be valid [com or net or edu]"
    }),
    password: joi 
      .string() 
      .pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)),
      cPassword:joi.string().valid(joi.ref("password")).required()
  
  }).required(),

  // query:joi.object({
  //       flag:joi.boolean().required()
  // }).required()
}

  

export const logInSchema = {
  body:joi.object({
    email: joi.string().email().required(),
    password: joi.string().pattern(new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)),
  })
  .required()
};