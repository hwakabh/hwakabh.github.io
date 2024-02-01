var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.json({
    "path": req.path,
    "body": "Hello, Developers!"
  });
});

// Endpoint of probe target
router.get('/healthz', function(req, res) {
  res.status(200).json({
    "status": "ok"
  });
});

module.exports = router;
