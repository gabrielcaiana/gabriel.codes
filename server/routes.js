const express = require('express')
const routes = express.Router()

routes.get('/github', (_req, res) => {
  res.send('server github')
})

module.exports = routes