'use strict'

const getNewsDataService = require('../services/get-news-data-service')
const { httpStatusCode, generateSendErrorResponse } = require('../lib/utils')
const axios = require('axios');

const getNewsData = async (req, res) => {
    console.log('getNewsDatagetNewsData')
    try {
        let response = null
        if (req.body) {
            response = await getNewsDataService.retriveNewsData()
        }
        const statusCode = response.status_code || httpStatusCode.OK
        return res.status(statusCode).send(response)
    } catch (error) {
        console.log(error)
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(generateSendErrorResponse(error, 'Error while retriving news data'))
    }
}

module.exports = {
    getNewsData
}