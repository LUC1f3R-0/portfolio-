import { Router } from 'express'
import authMiddleware from '../middlewares/auth.middleware.js' 
import mailController from '../controllers/mail.controller.js'

const rootRoute = Router()

rootRoute.post('/contact', authMiddleware, mailController)

export default rootRoute