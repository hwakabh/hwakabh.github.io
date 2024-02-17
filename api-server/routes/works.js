const express = require('express');
const router = express.Router();

require('json5/lib/register');


// Endpont: /api/v1/works
router.get('/', (req, res, next) => {
  // #swagger.tags = ['Works']
  // #swagger.description = 'list of personal works with static contents'
  const works = require(__dirname + "/../fixtures/payloads/works.json5");
  console.log(works);

  res.header('Content-Type', 'application/json; charset=utf-8');
  res.json({
    "path": req.originalUrl,
    "content": works.list
  })
})

module.exports = router;
