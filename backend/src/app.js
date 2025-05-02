import express from "express";
import cors from 'cors'
import rootRoute from "./routes/root.route.js";

const app = express()

app.use(express.json())
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }))

//routes
app.use('/post', rootRoute)

export default app