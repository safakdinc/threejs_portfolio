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
    auth: {
      user: target_mail,
      pass: target_password
    }
  });
  transporter.sendMail(
    {
      from: `${query.name} <${target_mail}>`,
      to: target_mail,
      subject: 'From Portfolio',
      text: `Name: ${query.name}\nEmail: ${query.email}\nMessage: ${query.message}`
    },
    function (error, info) {
      if (error) {
        success = false;
        console.log(error);
      } else {
        success = true;
      }
    }
  );

  return {
    data: success
  };
});
