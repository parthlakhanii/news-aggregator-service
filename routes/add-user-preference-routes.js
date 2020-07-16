'use strict'

const express = require('express')
const routes = express.Router()
const addUserPreferenceController = require('../controllers/add-user-preference-controller')

routes.post('/UserPreferenceData', addUserPreferenceController.addUserPreferenceData)

module.exports = routes