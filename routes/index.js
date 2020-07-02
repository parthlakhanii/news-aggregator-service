'use strict'

const newsData = require('./add-news-data-routes')
module.exports = function (app) {
    app.use('/api/v1/add', newsData)
}