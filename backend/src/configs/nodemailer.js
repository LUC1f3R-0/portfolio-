import nodemailer from 'nodemailer'
import 'dotenv/config'

const transporter   = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: +(587),
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
    }
});

export default transporter 