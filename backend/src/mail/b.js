import receivedEmail from "../services/templates/receivedEmail.template.service.js";

const functionTwo = (name, email, subject, message) => {

    console.log(name, email, subject, message)

    const mail = {
        from: process.env.SENDER_MAIL,
        to: process.env.SENDER_MAIL,
        subject: subject,
        html: receivedEmail(name, message, subject, email)
    };
    return mail;
}

export default functionTwo;
