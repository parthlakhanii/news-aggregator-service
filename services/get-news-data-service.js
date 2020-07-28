'use strict'

const { logger, httpStatusCode, generateSuccessResponse, generateErrorResponse } = require('../lib/utils')
const newsData = require('../models/news-data')
const standardApiStructureManager = require('../lib/standard-API-structure-manager')

const retriveNewsData = async(query) => {
    try {
        // let result = await newsData.find(generateQuery(query))
        let result = await newsData.find(generateQuery(query)).sort({'publishedDate': -1})
        return generateSuccessResponse(result, 'Data retrived Succesfully', httpStatusCode.OK)
    } catch(error) {
        console.log(error)
        logger.eroor('Error while retriving news data from service = %j', error, error)
        return generateErrorResponse(error, 'Error while retriving news data', httpStatusCode.INTERNAL_SERVER_ERROR)
    }
}

function generateQuery(query) {
    let queryJson = {}
    for (let element in query) {
        queryJson[element] = query[element]
    }
    return queryJson
}

module.exports = {
    retriveNewsData
}