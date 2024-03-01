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

// Endpoint: /api/v1/cv/educations
router.get('/educations', function(req, res, next) {
  // #swagger.tags = ['CV']
  // #swagger.description = 'returns list of educations with static contents'
  const educations = require(__dirname + "/../fixtures/payloads/educations.json5");

  res.header('Content-Type', 'application/json; charset=utf-8');
  res.json({
    "path": req.originalUrl,
    "content": educations.list
  });
});

// Endpoint: /api/v1/cv/projects
router.get('/projects', function(req, res, next) {
  // #swagger.tags = ['CV']
  // #swagger.description = 'returns list of projects with static contents'
  const projects = require(__dirname + "/../fixtures/payloads/projects.json5");

  res.header('Content-Type', 'application/json; charset=utf-8');
  res.json({
    "path": req.originalUrl,
    "content": projects.list
  });
});

// Endpoint: /api/v1/cv/publications
router.get('/publications', function(req, res, next) {
  // #swagger.tags = ['CV']
  // #swagger.description = 'returns list of publications with static contents'
  let publications = require(__dirname + "/../fixtures/payloads/publications.json5");

  // parse JSON with adding `url` fields from `filename` fields
  publications.list.forEach(elm => {
    // TODO: make dynamically change with http/https
    elm.link = 'http://' + req.headers.host + '/api/v1/cv/publications/' + elm.filename
  });
  console.log(publications.list);

  res.header('Content-Type', 'application/json; charset=utf-8');
  res.json({
    "path": req.originalUrl,
    "content": publications.list
  });
});

// Endpoint: /api/v1/cv/publications/:filename
router.get('/publications/:filename', function(req, res, next) {
  // #swagger.tags = ['CV']
  // #swagger.description = 'send file with pdf format'
  console.log(`Start sending file: ${req.params.filename}`);
  res.setHeader('Content-type', 'application/pdf');
  res.sendFile(`${req.params.filename}`, { root: __dirname + "/../fixtures/pubs/" })
});


module.exports = router;
