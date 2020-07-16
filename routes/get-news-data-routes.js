'use strict'

const express = require('express')
const routes = express.Router()
const getNewsDataController = require('../controllers/get-news-data-controller')

routes.get('/newsData', getNewsDataController.getNewsData)

module.exports = routes