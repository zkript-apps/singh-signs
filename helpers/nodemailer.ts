import nodemailer from "nodemailer";

const email = "jp.madrigal07@gmail.com";
const pass = "ejeyfvqxebxeirrq";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: `Singh Signs Company <${email}>`,
};