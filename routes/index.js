'use strict'

const addNewsData = require('./add-news-data-routes')
const newsApiCall = require('./wrapper-news-api-routes')
const getNewsData = require('./get-news-data-routes')

module.exports = function (app) {
    app.use('/api/v1/add', addNewsData)
    app.use('/api/v1/wrapper', newsApiCall)
    app.use('/api/v1/get', getNewsData)
}