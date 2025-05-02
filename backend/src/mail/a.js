import sayHi from "../services/templates/mail.template.service.js";

const functionOne = (email) => {
    
    const mail = {
        from: process.env.SENDER_MAIL,
        to: email,
        subject: 'Greeting from our Service',
        html: sayHi()
    };
    return mail;
}

export default functionOne;
