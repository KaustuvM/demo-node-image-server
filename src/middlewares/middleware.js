/*
 * Class - Middleware
 */
'use strict'
const express = require('express')
const winston = require('../config/winston')
const path = require('path')
const imagesPath = path.join(__dirname, 'images').replace('/middlewares', '')

class Middleware {
    static initialize(app) {
        app.use('/images', express.static(imagesPath))
        winston.info('Middlewares initialized.....')
    }
}

module.exports = Middleware
