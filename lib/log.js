'use strict'

const { red, green, yellow, blueBright } = require('ansi-colors')

const levels = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3
}

const colors = [blueBright, green, yellow, red]

function log (severity, line) {
  const level = levels[severity] || 0
  if (level === 1) {
    line = '--> ' + line
  }
  console[severity](colors[level](line))
}
module.exports = log
