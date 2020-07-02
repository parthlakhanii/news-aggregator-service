'use strict'

const express = require('express')
const routes = express.Router()
const addNewsDataController = require('../controllers/add-news-data-controller')

routes.post('/newsData', addNewsDataController.addNewsData)

module.exports = routes