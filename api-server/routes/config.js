const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/git', async (req, res, next) => {
  // #swagger.tags = ['Config']
  // #swagger.summary = 'Fetch raw data from hwakabh/dotfiles'
  // #swagger.description = '/api/v1/_config/git'
  const url = 'https://raw.githubusercontent.com/hwakabh/dotfiles/refs/heads/main/gitconf/.gitconfig';
  const gitconfig = await axios.get(url)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(error);
    })
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.json({
    "path": req.originalUrl,
    "content": gitconfig
  });

});

router.get('/bashrc', async (req, res, next) => {
  // #swagger.tags = ['Config']
  // #swagger.summary = 'Fetch raw data from hwakabh/dotfiles'
  // #swagger.description = '/api/v1/_config/bashrc'
  const url = 'https://raw.githubusercontent.com/hwakabh/dotfiles/refs/heads/main/bash/.bashrc';
  const bashrc = await axios.get(url)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log(error);
    })
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.json({
    "path": req.originalUrl,
    "content": bashrc
  });

});


module.exports = router;
