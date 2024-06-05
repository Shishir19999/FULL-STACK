const axios = require('axios');
const nodemailer = require("nodemailer");
const pug = require("pug");
const inlineCSS = require("inline-css");
const htmlToText = require("html-to-text");
const email = require("../config/mail");

const transport = nodemailer.createTransport({
  host: email.host,
  port: email.port,
  auth: {
    user: email.username,
    pass: email.password
  }
});

const generateHTML = async (filename, options = {}) => {
  const html = pug.renderFile(
    `${__dirname}/../views/email/${filename}.pug`,
    options
  );
  const inlined = await inlineCSS(html, { url: ' ' });
  return inlined;
};

exports.send = async options => {
  const html = await generateHTML(options.filename, options);
  const text = htmlToText.convert(html);
  const mailOptions = {
    from: email.from,
    to: options.user.email,
    subject: options.subject,
    html,
    text
  };
  return transport.sendMail(mailOptions);
};
