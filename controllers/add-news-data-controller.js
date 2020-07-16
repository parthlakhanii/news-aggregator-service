'use strict'

const addNewsDataService = require('../services/add-news-data-service')
const { httpStatusCode, generateSendErrorResponse } = require('../lib/utils')
const axios = require('axios');

const addNewsData = async (req, res) => {
    try {
        let response = null
        if (req.body) {
            response = await addNewsDataService.addNewsData(req.body, newsData)
        }
        const statusCode = response.status_code || httpStatusCode.OK
        return res.status(statusCode).send(response)
    } catch (error) {
        console.log(error)
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(generateSendErrorResponse(error, 'Error while inserting news data'))
    }
}

module.exports = {
    addNewsData
}