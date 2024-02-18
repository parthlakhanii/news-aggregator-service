const mongoose = require('mongoose');
const { autoIncrement } = require('mongoose-plugin-autoinc');
require('mongoose-long')(mongoose);
const Schema = mongoose.Schema;

const newsDataSchema = new mongoose.Schema(
  {
    news_id: {
      type: Number,
      unique: true,
      required: true,
    },
    source: {
      type: String,
      required: false,
    },
    url: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    imageUrl: {
      type: String,
      required: false,
    },
    publishedDate: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    content: {
      type: String,
      required: false,
    },
    category: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
    language: {
      type: String,
      required: false,
    },
    updated_on: {
      type: String,
      required: false,
      unique: false,
    },
    created_on: {
      type: String,
      required: false,
      unique: false,
    },
  },
  {
    collection: 'news_data',
  }
);
newsDataSchema.plugin(autoIncrement, {
  model: 'news_data',
  field: 'news_id',
  startAt: 1,
});
module.exports = mongoose.model('news_data', newsDataSchema);
