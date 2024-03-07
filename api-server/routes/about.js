const express = require('express');
const router = express.Router();
const axios = require('axios');

const https = require('https');
const jsdom = require('jsdom');
const { type } = require('os');
const { JSDOM } = jsdom;

router.get('/', (req, res, next) => {
  // #swagger.tags = ['About']
  // #swagger.summary = 'returns static information about me'
  // #swagger.description = '/api/v1/about'
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.json({
    "path": req.originalUrl,
    "about": "Here is root of about page"
  })
});

router.get('/books', async (req, res, next) => {
  // #swagger.tags = ['About']
  // #swagger.summary = 'list of books responses from Booklog API'
  // #swagger.description = '/api/v1/about/books'

  // note: available query strings
  // ?category=0&status=0&rank=0&count=100
  const url = 'https://api.booklog.jp/v2/json/hwakabh'
  const books = await axios.get(url)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(error);
    })

  res.header('Content-Type', 'application/json; charset=utf-8');
  res.json({
    "path": req.originalUrl,
    "content": books
  });
})


// TODO: need to add scraping features
router.get('/movies', async (req, res, next) => {
  // #swagger.tags = ['About']
  // #swagger.summary = 'list of movies from the results of scrapping Filmarks'
  // #swagger.description = '/api/v1/about/movies'
  const url = 'https://filmarks.com/users/11ne56';
  const html = await axios.get(url)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(error);
    });

  const dom = new JSDOM(html);
  const document = dom.window.document;
  const nodes = document.querySelectorAll('a.c-content__jacket > img');

  const movies = [];
  console.log(`Found ${nodes.length} nodes from DOM`)
  nodes.forEach((elm) => {
    movies.push({
      title: elm.getAttribute('alt'),
      src: elm.getAttribute('src')
    });
  });

  res.header('Content-Type', 'application/json; charset=utf-8');
  res.json({
    "path": req.originalUrl,
    // returns only first 6 instances
    "content": movies.slice(0, 6)
  })
});


module.exports = router;
