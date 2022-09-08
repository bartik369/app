import nodemailer from "nodemailer";

class MailService {
    constructor() {

    }

    async sendActivationMail(to, link) {
        this.transporter = nodemailer.createTransport({
            host: "",
            port: "",
            secure: false,
            auth: {

            },
        })
    }

};

export default new MailService()