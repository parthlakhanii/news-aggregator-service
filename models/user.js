const mongoose = require('mongoose')
const { autoIncrement } = require('mongoose-plugin-autoinc')
require('mongoose-long')(mongoose)
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    user_id: {
        type: Number,
        unique: true,
        required: true
    },
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    roles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role"
        }
    ],
    country: {
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
        collection: 'user'
    })
userSchema.plugin(autoIncrement, {
    model: 'user',
    field: 'user_id',
    startAt: 1
})
module.exports = mongoose.model('user', userSchema)
