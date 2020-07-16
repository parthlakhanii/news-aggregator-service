const mongoose = require('mongoose')
const { autoIncrement } = require('mongoose-plugin-autoinc')
require('mongoose-long')(mongoose)
const Schema = mongoose.Schema;

const userPreferenceSchema = new mongoose.Schema({
    user_preference_id: {
        type: Number,
        unique: true,
        required: true
    },
    user_id: {
        type: Number,
        required: true
    },
    country: {
        type: Array,
        required: false
    },
    catagory: {
        type: Array,
        required: false
    },
    updated_on: {
        type: String,
        required: false,
        unique: false
    },
    created_on: {
        type: String,
        required: false,
        unique: false
    }
},
    {
        collection: 'user_preference'
    })
userPreferenceSchema.plugin(autoIncrement, {
    model: 'user_preference',
    field: 'user_preference_id',
    startAt: 1
})
module.exports = mongoose.model('user_preference', userPreferenceSchema)
