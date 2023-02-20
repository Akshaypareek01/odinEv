import express from 'express'
import cors from 'cors'
import { userRouter } from './Routes/routes.js'
import { connection } from './Configs/db.js'

const app = express()
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>res.send("Working"))
app.use("/api",userRouter);
app.use("/api",userRouter);


app.listen(8080, () => {
    try {
      console.log("Listening on Port 8080")
        // connection()
    } catch (e) {
      console.log(e)
    }
  })
  