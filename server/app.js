import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { config } from './config.js'
import { connectDB } from './db/database.js';
import questionRouter from './router/question.js'

const app = express()

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())
app.use('/question', questionRouter)

app.use((req,res,next)=>{
    res.sendStatus(404)
})

// DB연결
connectDB().then(db=>{
    console.log('init!')
    const server=app.listen(config.host.port)
    // initSocket(server)  //나중에 할거
}).catch(console.error)