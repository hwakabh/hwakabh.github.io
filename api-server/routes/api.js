const express = require('express');

const router = express.Router();
const aboutRouter = require('./about');
const cvRouter = require('./cv');
const worksRouter = require('./works');

router.use('/about', aboutRouter);
router.use('/cv', cvRouter);
router.use('/works', worksRouter);


// TODO: need to change with POST only
router.get('/contact', (req, res, next) => {
  console.log(req);
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.json({
    "path": req.originalUrl,
    "content": "Here is contact"
  });
});

module.exports = router;
