const express = require('express');

const router = express.Router();
const aboutRouter = require('./about');
const cvRouter = require('./cv');
const worksRouter = require('./works');

const URL_PREFIX = '/api/v1';

router.use(URL_PREFIX + '/about', aboutRouter);
router.use(URL_PREFIX + '/cv', cvRouter);
router.use(URL_PREFIX + '/works', worksRouter);

// TODO: need to change with POST only
router.get(URL_PREFIX + '/contact', (req, res, next) => {
  // #swagger.tags = ['Contact']
  // #swagger.description = 'invoke external API to send email'
  console.log(req);
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.json({
    "path": req.originalUrl,
    "content": "Here is contact"
  });
});

module.exports = router;
