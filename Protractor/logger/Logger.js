'use strict'
const { createLogger, format, transports } = require('winston')
const fs = require('fs')
const path = require('path')
const logDir = 'log'

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir)
}

const logger = createLogger({
  level: 'debug',
  format: format.combine(
    format.label({ label: path.basename(process.mainModule.filename) }),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' })
  ),
  transports: [
    new transports.Console({
      format: format.combine(
        format.colorize(),
        format.printf(info => `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`)
      )
    }),
    new transports.File({
      format: format.combine(format.printf(info => `${info.timestamp} ${info.level} [${info.label}]: ${info.message}`))
    })
  ]
})

module.exports = logger
