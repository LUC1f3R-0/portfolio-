import functionOne from "../mail/a.js";
import functionTwo from "../mail/b.js";
import transporter from "../configs/nodemailer.js";

const mailController = async (request, response) => {
    try {
        const { name, email, subject, message } = request.body;

        //mail for sender
        const mailOptions = functionOne(email);
        await transporter.sendMail(mailOptions);

        //mail for me
        const sendMailToMe = functionTwo(name, email, subject, message)
        
        await transporter.sendMail(sendMailToMe);

        return response.status(200).json({ success: true, message: "Email sent.\nCheck your inbox or spam Folder" });
    } catch (error) {
        console.error(error);
        return response.status(500).json({ success: false, message: 'Failed to send email', error: error.message });
    }
}

export default mailController;
