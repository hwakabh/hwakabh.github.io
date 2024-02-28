const express = require('express');
const router = express.Router();


// TODO: passing through request body to external SMTP services
router.post('/', (req, res, next) => {
  // #swagger.tags = ['Contact']
  // #swagger.description = 'invoke external API to send email'
  console.log(req.body);
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.json({
    status: "POST ok"
  })
});

router.get('/thanks', (req, res, next) => {
  // #swagger.tags = ['Contact']
  // #swagger.description = 'returns thanks message after POST requests'
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.json({
    "path": req.originalUrl,
    "content": "Thank you for making contact!"
  });
})

module.exports = router;
