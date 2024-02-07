const express = require('express');
const router = express.Router();
const axios = require('axios');


// Endpoint: /api/v1/about
router.get('/', (req, res, next) => {
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.json({
    "path": req.originalUrl,
    "about": "Here is root of about page"
  })
});

// Endpoint: /api/v1/about/books
router.get('/books', async (req, res, next) => {
  const url = 'https://api.booklog.jp/v2/json/hwakabh'
  const books = await axios.get(url)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(error);
    })

  let resBody = {
    "path": req.originalUrl,
    "content": books
    }

  res.header('Content-Type', 'application/json; charset=utf-8');
  res.json(resBody);
})


// Endpoint: /api/v1/about/movies
// TODO: need to add scraping features
router.get('/movies', (req, res, next) => {
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.json({
    "path": req.originalUrl,
    "about": "Here is listing movies"
  })
});


module.exports = router;
