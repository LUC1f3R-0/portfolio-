import express from "express";
import cors from 'cors'
import rootRoute from "./routes/root.route.js";

const app = express()

app.use(express.json())
app.use(cors({ origin: "https://genuine-gnome-0fe49b.netlify.app", credentials: true }))

//routes
app.use('/post', rootRoute)

export default app