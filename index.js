import express from 'express'
import cors from 'cors'
import { userRouter } from './Routes/routes.js'
import { connection } from './Configs/db.js'

const app = express()
app.use(express.json())
app.use(cors())

app.get("/api/user",(req,res)=>res.send("Working api"))

app.use("/api/user",userRouter);



app.listen(8080, () => {
    try {
      console.log("Listening on Port 8080.....")
        // connection()
    } catch (e) {
      console.log(e)
    }
  })
  

  // http://localhost:8080/api/user/signup  post req