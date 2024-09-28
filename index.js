import * as dotenv from "dotenv"
dotenv.config()
import express from 'express'
import initApp from './src/app.router.js'
import sendEmail from "./src/utils/sendEmail.js"
const app = express()
const port = 5000
initApp(app,express)
//sendEmail({bcc:['ahmeddddyehiaaaa@gmail.com'],html:'<h2>helllo</h2>' ,subject:"yaya"}) // send email 
app.listen(port, () => console.log(`Example app listening on port ${port}!`))