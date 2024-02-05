const express = require('express');
const router = express.Router();

require('json5/lib/register');


router.get('/', function(req, res, next) {
  const projects = require(__dirname + "/../../contents/projects.json5");
  console.log(projects);

  res.header('Content-Type', 'application/json; charset=utf-8');
  res.json({
    "path": projects.path,
    "data": projects.list
  });
});


module.exports = router;
