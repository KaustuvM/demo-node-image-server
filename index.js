/*
 */
'use strict'
const process = require('./src/listeners/processListener.js')
const application = require('./src/app/app')
const express = require('express')
const app = module.exports = express()


/*
 * Listen to the process events.
 */
process.listen()

/*
 * Run the application.
 */
application.run(app)
