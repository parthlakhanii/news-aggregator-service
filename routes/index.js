'use strict'

const addNewsData = require('./add-news-data-routes')
const newsApiCall = require('./wrapper-news-api-routes')
const getNewsData = require('./get-news-data-routes')
const userPreferenceData = require('./add-user-preference-routes')

module.exports = function (app) {
    app.use('/api/v1/add', addNewsData, userPreferenceData)
    app.use('/api/v1/wrapper', newsApiCall)
    app.use('/api/v1/get', getNewsData)
}