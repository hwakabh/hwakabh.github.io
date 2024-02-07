const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  // #swagger.description = 'API root'
  res.json({
    "path": req.originalUrl,
    "content": "Hello, Developers!"
  });
});


router.get('/healthz', function(req, res) {
  // #swagger.description = 'Endpoint of probe target'
  res.status(200).json({
    "status": "ok"
  });
});


module.exports = router;
