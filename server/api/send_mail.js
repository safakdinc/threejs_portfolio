import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

export default defineEventHandler(async event => {
  dotenv.config();
  const query = getQuery(event);
  const target_mail = process.env.MAIL;
  const target_password = process.env.PASSWORD;
  let success = true;

  const mailData = {
    from: `${query.name} <${target_mail}>`,
    to: target_mail,
    subject: 'From Portfolio',
    text: `Name: ${query.name}\nEmail: ${query.email}\nMessage: ${query.message}`
  };

  try {
    await nodemailer
      .createTransport({
        service: 'gmail',
        port: 465,
        auth: {
          user: target_mail,
          pass: target_password
        }
      })
      .sendMail(mailData);
    success = true;
  } catch (e) {
    success = false;
    console.error(e);
  }

  return {
    data: success
  };
});
