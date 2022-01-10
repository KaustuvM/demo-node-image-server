/*
 * Class - Application
 */
'use strict'
const winston = require('../config/winston')
const Middleware = require('../middlewares/middleware.js')

/*
 * Class - Application
 */

const HTTP_PORT = 3000

class Application {

    static run(app) {

        // Mount Middlewares
        Middleware.initialize(app)

        // Create HTTP server
        global.server = app.listen(process.env.PORT || 3000, () => {
            winston.info(`HTTP server started at port ${process.env.PORT || 3000}`)
        })
    }

    static close() {
        global.server.close()
    }
}

module.exports = Application
