var express = require('express');
var router = express.Router();

require('json5/lib/register');

router.get('/', function(req, res, next) {
  const projects = require(__dirname + "/../data/projects.json5");

  res.header('Content-Type', 'application/json; charset=utf-8');
  res.json(projects);
});


module.exports = router;
