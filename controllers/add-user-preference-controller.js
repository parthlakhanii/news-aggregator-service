'use strict'

const addUserPreferenceDataService = require('../services/add-user-preference-service')
const { httpStatusCode, generateSendErrorResponse } = require('../lib/utils')
const axios = require('axios');

const addUserPreferenceData = async (req, res) => {
    try {
        let response = null
        if (req.body) {
            response = await addUserPreferenceDataService.addPreferenceData(req.body)
        }
        const statusCode = response.status_code || httpStatusCode.OK
        return res.status(statusCode).send(response)
    } catch (error) {
        console.log(error)
        res.status(httpStatusCode.INTERNAL_SERVER_ERROR).send(generateSendErrorResponse(error, 'Error while inserting user preference data'))
    }
}

module.exports = {
    addUserPreferenceData
}