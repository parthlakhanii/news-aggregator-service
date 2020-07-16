'use strict'

const { logger, httpStatusCode, generateSuccessResponse } = require('../lib/utils')
const newsData = require('../models/news-data')

const retriveNewsData = async(request, response) => {
    try {
        let result = await newsData.find().exec()
        return result
    } catch(error) {
        console.log(error)
        logger.eroor('Error while retriving news data from service = %j', error, error)
        return generateSuccessResponse(error, 'Error while retriving news data', httpStatusCode.INTERNAL_SERVER_ERROR)
    }
}

module.exports = {
    retriveNewsData
}