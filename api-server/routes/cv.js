const express = require('express');
const router = express.Router();

require('json5/lib/register');


// Endpoint: /api/v1/cv
router.get('/', (req, res, next) => {
  // #swagger.tags = ['CV']
  // #swagger.description = 'returns static contents about career summaries'
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.json({
    "path": req.originalUrl,
    "content": "Here is root of CV"
  });
});


// Endpoint: /api/v1/cv/project
router.get('/projects', function(req, res, next) {
  // #swagger.tags = ['CV']
  // #swagger.description = 'returns list of projects with static contents'
  const projects = require(__dirname + "/../../contents/projects.json5");
  console.log(projects);

  res.header('Content-Type', 'application/json; charset=utf-8');
  res.json({
    "path": req.originalUrl,
    "content": projects.list
  });
});

module.exports = router;
