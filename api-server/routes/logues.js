const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res, next) => {
  // #swagger.tags = ['Logues']
  // #swagger.summary = 'returns dynamic content for the blog page'
  // #swagger.description = '/api/v1/logues'

  const CONSUMER_KEY = process.env.TUMBLR_CONSUMER_KEY;
  const url = 'https://api.tumblr.com/v2/blog/hwakabh.tumblr.com/posts?api_key=' + CONSUMER_KEY;
  const respPosts = await axios.get(url)
    .then(response => {
      return response.data.response.posts
    })
    .catch(error => {
      console.log(error);
    })

  const posts = [];
  respPosts.forEach(p => {
    posts.push({
      date: p.date,
      body: p.body
    })
  });

  console.log(posts);

  res.header('Content-Type', 'application/json; charset=utf-8');
  res.json({
    "path": req.originalUrl,
    "content": posts
  });

});

module.exports = router;
