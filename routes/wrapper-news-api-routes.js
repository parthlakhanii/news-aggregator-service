'use strict'

const express = require('express')
const routes = express.Router()
const wrapperNewsApiController = require('../controllers/wrapper-news-api-controller')

routes.post('/newsApiCall', wrapperNewsApiController.newsApiCall)

module.exports = routes