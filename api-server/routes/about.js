const express = require('express');
const router = express.Router();
const axios = require('axios');


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
router.get('/movies', (req, res, next) => {
  // #swagger.tags = ['About']
  // #swagger.summary = 'list of movies from the results of scrapping Filmarks'
  // #swagger.description = '/api/v1/about/movies'
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.json({
    "path": req.originalUrl,
    "about": "Here is listing movies"
  })
});


module.exports = router;
