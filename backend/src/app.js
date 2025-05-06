import express from "express";
import cors from 'cors'
import rootRoute from "./routes/root.route.js";

const app = express()

app.use(express.json())
app.use(cors({ origin: "http://localhost:5173", credentials: true }))

//routes
app.use('/post', rootRoute)

export default app