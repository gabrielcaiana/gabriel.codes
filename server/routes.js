const express = require('express')
const routes = express.Router()

routes.get('/repos', (_req, res) => {
  res.json()
})

module.exports = routes