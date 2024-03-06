const express = require('express');
const router = express.Router();
const axios = require('axios');


// TODO: passing through request body to external SMTP services
router.post('/', async (req, res, next) => {
  // #swagger.tags = ['Contact']
  // #swagger.summary = 'invoke external API to send email'
  // #swagger.description = '/api/v1/contact'
  const url = 'https://api.brevo.com/v3/smtp/email';
  const apiKey = process.env.MAIL_API_KEY;
  const mailbody = {
    "sender": {
      "name": req.body.name,
      "email": req.body.email
    },
    "to": [{
      "name": "Hiroyuki Wakabayashi",
      "email": "hrykwkbys1024@gmail.com"
    }],
    "subject": `[hwakabh.github.io] Form submission from ${req.body.email}`,
    "textContent": req.body.body
  };
  const header = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "api-key": apiKey
  }
  console.log(mailbody);
  await axios.post(url, mailbody, {headers: header})
    .then((resp) => {
      console.log(resp.data);
      res.header('Content-Type', 'application/json; charset=utf-8');
      res.status(resp.status);
      res.json({
        status: "POST ok",
        inputs: req.body
      })
    })
    .catch((err) => {
      console.log(err);
      res.status(err.response.status);
      res.json({
        status: "POST failed",
      })
    })
});

module.exports = router;
