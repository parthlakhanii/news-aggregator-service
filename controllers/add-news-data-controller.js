'use strict'

const addNewsDataService = require('../services/add-news-data-service')
const { httpStatusCode, generateSendErrorResponse } = require('../lib/utils')
const axios = require('axios');

const addNewsData = async (req, res) => {
    try {
        let response = null
        // let newsData = await callNewsApi()
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

async function callNewsApi() {
    return axios.get('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d3b0a905d83144d5a90b9d3f07dcd03e')
    .then(response => {
        return response.data.articles
    })
    .catch(error => {
        console.log(error)
    })
}

module.exports = {
    addNewsData
}