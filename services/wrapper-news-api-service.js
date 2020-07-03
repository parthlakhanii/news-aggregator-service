const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('d3b0a905d83144d5a90b9d3f07dcd03e');
const { httpStatusCode, generateSuccessResponse } = require('../lib/utils');
const e = require('express');
const addNewsDataService = require("./add-news-data-service")

const callNewsApi = async (body) => {
  console.log('callNewsApiService')
  if (body.type == 'everything') {
    return newsapi.v2.everything({
      q: body.q || null,
      sources: bpdy.sources || null,
      domains: bpdy.domains || null,
      from: body.from || null,
      to: body.to || null,
      language: body.language || null,
      sortBy: 'relevancy',
      page: 2
    }).then(response => {
      console.log(response)
      return generateSuccessResponse(response, 'news data added succesfully', httpStatusCode.OK)
    });
  } else {
    return newsapi.v2.topHeadlines({
      category: body.catagory || null,
      language: body.language || null,
      country: body.country || null
    }).then(response => {
      return generateSuccessResponse(response, 'news data added succesfully', httpStatusCode.OK)
    });
  }
}

module.exports = {
  callNewsApi
}