const express = require('express');

const router = express.Router();
const aboutRouter = require('./about');
const cvRouter = require('./cv');
const worksRouter = require('./works');
const contactRouter = require('./contact');

const URL_PREFIX = '/api/v1';

router.use(URL_PREFIX + '/about', aboutRouter);
router.use(URL_PREFIX + '/cv', cvRouter);
router.use(URL_PREFIX + '/works', worksRouter);
router.use(URL_PREFIX + '/contact', contactRouter);

module.exports = router;
