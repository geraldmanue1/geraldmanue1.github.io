// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
javascript
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey('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')
const msg = {
  to: 'geraldmanuel96@gmail.com', // Change to your recipient
  from: 'geraldmanuel96@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
