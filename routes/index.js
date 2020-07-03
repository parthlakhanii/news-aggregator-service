'use strict'

const newsData = require('./add-news-data-routes')
const newsApiCall = require('./wrapper-news-api-routes')

module.exports = function (app) {
    app.use('/api/v1/add', newsData)
    app.use('/api/v1/wrapper', newsApiCall)
}