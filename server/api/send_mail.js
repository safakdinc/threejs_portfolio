import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

export default defineEventHandler(async event => {
  dotenv.config();
  const query = getQuery(event);
  const target_mail = process.env.MAIL;
  const target_password = process.env.PASSWORD;
  let success = true;
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    auth: {
      user: target_mail,
      pass: target_password
    }
  });
  const mailData = {
    from: `${query.name} <${target_mail}>`,
    to: target_mail,
    subject: 'From Portfolio',
    text: `Name: ${query.name}\nEmail: ${query.email}\nMessage: ${query.message}`
  };
  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        success = false;
        reject(err);
      } else {
        success = true;
        resolve(info);
      }
    });
  });

  return {
    data: success
  };
});
