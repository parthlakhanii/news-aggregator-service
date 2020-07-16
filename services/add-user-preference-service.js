'use strict'

const { logger, httpStatusCode, generateSuccessResponse } = require('../lib/utils')
const userPreferenceData = require('../models/user-preference')
const { json } = require('body-parser')

const addPreferenceData = async (body) => {
    console.log('addPreferenceData serviceeee')
    try {
        let jsonBody = generateJsonBody(body)
        let response = await userPreferenceData.insertMany(jsonBody)
        logger.debug('Inserted preference data from service = %j', response)
        return generateSuccessResponse(response, 'preference data added succesfully')
    } catch (error) {
        console.log(error)
        logger.eroor('Error while inserting preference data details from service = %j', error, error)
        return generateSuccessResponse(error, 'Error while inserting preference data', httpStatusCode.INTERNAL_SERVER_ERROR)
    }
}

function generateJsonBody(body) {
    let json = {}
    json['user_id'] = body.user_id
    json['country'] = body.country
    json['catagory'] = body.catagory
    return json
}

module.exports = {
    addPreferenceData
}