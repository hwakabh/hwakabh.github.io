const express = require('express');
const router = express.Router();

require('json5/lib/register');


router.get('/', (req, res, next) => {
  // #swagger.tags = ['CV']
  // #swagger.summary = '/api/v1/cv'
  // #swagger.description = 'returns static contents about career summaries'
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.json({
    "path": req.originalUrl,
    "content": "Here is root of CV"
  });
});

router.get('/educations', function(req, res, next) {
  // #swagger.tags = ['CV']
  // #swagger.summary = '/api/v1/cv/educations'
  // #swagger.description = 'returns list of educations with static contents'
  const educations = require(__dirname + "/../fixtures/payloads/educations.json5");

  res.header('Content-Type', 'application/json; charset=utf-8');
  res.json({
    "path": req.originalUrl,
    "content": educations.list
  });
});

router.get('/projects', function(req, res, next) {
  // #swagger.tags = ['CV']
  // #swagger.summary = 'returns list of projects with static contents'
  // #swagger.description = '/api/v1/cv/projects'
  const projects = require(__dirname + "/../fixtures/payloads/projects.json5");

  res.header('Content-Type', 'application/json; charset=utf-8');
  res.json({
    "path": req.originalUrl,
    "content": projects.list
  });
});

router.get('/publications', function(req, res, next) {
  // #swagger.tags = ['CV']
  // #swagger.summary = 'returns list of publications with static contents'
  // #swagger.description = '/api/v1/cv/publications'
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

router.get('/publications/:filename', function(req, res, next) {
  // #swagger.tags = ['CV']
  // #swagger.summary = 'send file with pdf format'
  // #swagger.description = '/api/v1/cv/publications/:filename'
  console.log(`Start sending file: ${req.params.filename}`);
  res.setHeader('Content-type', 'application/pdf');
  res.sendFile(`${req.params.filename}`, { root: __dirname + "/../fixtures/pubs/" })
});


module.exports = router;
