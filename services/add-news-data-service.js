'use strict'

const {logger, httpStatusCode, generateSuccessResponse} = require('../lib/utils')
const newsData = require('../models/news-data')

const addNewsData = async(body, newsApiData) => {
    try {
        let response;
        let jsonBody = generateJsonBody(newsApiData)
        // console.log(JSON.stringify(jsonBody))
        response = await newsData.insertMany(jsonBody)
        logger.debug('Inserted news data from service = %j',response)
        return generateSuccessResponse(response, 'news data added succesfully')
    } catch(error) {
        console.log(error)
        logger.eroor('Error while inserting news data details from service = %j', error, error)
        return generateSuccessResponse(error, 'Error while inserting news data', httpStatusCode.INTERNAL_SERVER_ERROR)
    }
}

function generateJsonBody(data) {
    let jsonBody = []
    data.forEach(element => {
        let json = {}
        json['source'] = element.source.name
        json['title'] = element.title
        json['imageUrl'] = element.urlToImage
        json['url'] = element.url
        json['content'] = element.content
        json['publishedDate'] = element.publishedAt
        jsonBody.push(json)
    });
    return jsonBody
}

module.exports = {
    addNewsData
}