'use strict';

const wrapperNewsApiService = require('../services/wrapper-news-api-service');
const { httpStatusCode, generateSendErrorResponse } = require('../lib/utils');
const axios = require('axios');
const addNewsDataService = require('../services/add-news-data-service');

const newsApiCall = async (req, res) => {
  try {
    console.log('newsApiCall controller', req.payload);
    let response = null;
    if (req.body) {
      response = await wrapperNewsApiService.callNewsApi(req.body);
      response = await addNewsDataService.addNewsData(
        req.body,
        response.data.articles
      );
    }
    const statusCode = response.status_code || httpStatusCode.OK;
    return res.status(statusCode).send(response);
  } catch (error) {
    console.log(error);
    res
      .status(httpStatusCode.INTERNAL_SERVER_ERROR)
      .send(
        generateSendErrorResponse(error, 'Error while inserting news data')
      );
  }
};

module.exports = {
  newsApiCall,
};
