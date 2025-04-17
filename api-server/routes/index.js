const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  // #swagger.tags = ['General']
  // #swagger.summary = 'backend API root'
  // #swagger.description = '/ (root)'
  res.json({
    "path": req.originalUrl,
    "content": "Hello, Developers!"
  });
});


router.get('/health', function(req, res) {
  // #swagger.tags = ['General']
  // #swagger.summary = 'Endpoint of probe target'
  // #swagger.description = '/healthz'
  res.status(200).json({
    "status": "ok"
  });
});


module.exports = router;
