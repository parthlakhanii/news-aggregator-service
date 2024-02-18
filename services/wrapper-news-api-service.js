const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('bb838ab8992e4227b5794952689876db');
const { httpStatusCode, generateSuccessResponse } = require('../lib/utils');
const e = require('express');
const addNewsDataService = require('./add-news-data-service');

const callNewsApi = async (body) => {
  if (body.type == 'everything') {
    return newsapi.v2
      .everything({
        q: body.q || null,
        sources: body.sources || null,
        domains: body.domains || null,
        from: body.from || null,
        to: body.to || null,
        language: body.language || null,
        sortBy: 'relevancy',
        page: 2,
      })
      .then((response) => {
        return generateSuccessResponse(
          response,
          'news data added succesfully',
          httpStatusCode.OK
        );
      });
  } else {
    console.log('topHeadlines => ', body);
    return newsapi.v2
      .topHeadlines({
        category: body.category || null,
        language: body.language || null,
        country: body.country || null,
      })
      .then((response) => {
        return generateSuccessResponse(
          response,
          'news data added succesfully',
          httpStatusCode.OK
        );
      });
  }
};

module.exports = {
  callNewsApi,
};
