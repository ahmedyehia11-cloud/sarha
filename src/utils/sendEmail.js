import nodemailer from "nodemailer";



async function sendEmail({to=[],cc,bcc,subject,text,html,attachments=[]}={}){
    let transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.EMAIL,
            pass:process.env.EMAIL_PASSWORD
        }
    }) 

    // send mail with defined Transport object
    let info = await transporter.sendMail({
        from: `"ahmed yehia" <${process.env.EMAIL}>`, // sender address
        to, // list of receivers
        cc,
        bcc,
        subject, // Subject line
        text, // plain text body
        html, // html body
        // attachments:[        
        //     {   // define custom content type for the attachment
        //     filename: 'text.bin',
        //     content: 'hello world!',
        //     contentType: 'text/plain'
        // },    {   // define custom content type for the attachment
        //     filename: 'cv.pdf',
        //     content: 'application/pdf',
        //     path:'./ahmed yehia al-abhar-1.pdf'
        // }]
    
    })
   // console.log(info);
    return info.rejected.length ? false:true

}
export default sendEmail