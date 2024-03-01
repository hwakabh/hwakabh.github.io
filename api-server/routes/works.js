const express = require('express');
const router = express.Router();

require('json5/lib/register');


router.get('/', (req, res, next) => {
  // #swagger.tags = ['Works']
  // #swagger.summary = 'list of personal works with static contents'
  // #swagger.description = '/api/v1/works'
  const works = require(__dirname + "/../fixtures/payloads/works.json5");
  console.log(works);

  res.header('Content-Type', 'application/json; charset=utf-8');
  res.json({
    "path": req.originalUrl,
    "content": works.list
  })
})

module.exports = router;
