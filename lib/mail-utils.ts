import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.NODE_ENV !== 'development',
    // secure: true,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
    }
} as SMTPTransport.Options)

console.log('==========XXXXXX', transport);

type SendEmailDto = {
    sender: Mail.Address,
    receipients: Mail.Address[],
    subject: string;
    message: string;
}

export const sendEmail = async (dto: SendEmailDto) => {
    const sn = "enquiries@mbgtechsolutions.com"
    const {sender, receipients, subject, message} = dto

    return await transport.sendMail({
        from: sn,
        to: receipients,
        subject,
        html: message,
        text: message
    })
}