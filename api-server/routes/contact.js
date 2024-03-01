const express = require('express');
const router = express.Router();


// TODO: passing through request body to external SMTP services
router.post('/', (req, res, next) => {
  // #swagger.tags = ['Contact']
  // #swagger.summary = 'invoke external API to send email'
  // #swagger.description = '/api/v1/contact'
  console.log(req.body);
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.json({
    status: "POST ok"
  })
});

router.get('/thanks', (req, res, next) => {
  // #swagger.tags = ['Contact']
  // #swagger.summary = 'returns thanks message after POST requests'
  // #swagger.description = '/api/v1/contact/thanks'
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.json({
    "path": req.originalUrl,
    "content": "Thank you for making contact!"
  });
})

module.exports = router;
