import nodemailer from 'nodemailer'
import 'dotenv/config'

console.log(process.env.MAIL_USERNAME)
console.log(process.env.MAIL_PASSWORD)

const transporter   = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: +(587),
    auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD
    }
});

export default transporter 