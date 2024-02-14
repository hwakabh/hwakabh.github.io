const express = require('express');
const router = express.Router();
const axios = require('axios');


// Endpoint: /api/v1/about
router.get('/', (req, res, next) => {
  // #swagger.tags = ['About']
  // #swagger.description = 'returns static information about me'
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.json({
    "path": req.originalUrl,
    "about": "Here is root of about page"
  })
});

// Endpoint: /api/v1/about/books
router.get('/books', async (req, res, next) => {
  // #swagger.tags = ['About']
  // #swagger.description = 'list of books responses from Booklog API'
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


// TODO: need to add scraping features
// Endpoint: /api/v1/about/movies
router.get('/movies', (req, res, next) => {
  // #swagger.tags = ['About']
  // #swagger.description = 'list of movies from the results of scrapping Filmarks'
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.json({
    "path": req.originalUrl,
    "about": "Here is listing movies"
  })
});


module.exports = router;
