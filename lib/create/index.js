'use strict'

const { existsSync } = require('fs')
const assert = require('assert')
const minimist = require('minimist')
const path = require('path')
const { promisify } = require('util')
const generify = promisify(require('generify'))
const { bold } = require('ansi-colors')
const validateName = require('validate-npm-package-name')
const camelCase = require('camelcase')

const { questions } = require('./questions')

function cliWrapper (log) {
  assert(log, 'log must not be undefined')
  assert(typeof log === 'function', 'log must be a function')

  function successInstructions ({ data }) {
    log('info', `project ${data.appName} generated successfully`)
    log('info', `run '${bold('npm install')}' to install the dependencies`)
    log('info', `run '${bold('npm start')}' to start the application as a developer`)
    log('info', `run '${bold('npm build')}' to build the application for production`)
  }

  async function generate (dir, template, data) {
    await generify(path.join(__dirname, 'templates', template.dir), dir, data, function (file) {
      log('debug', `generated ${file}`)
    })

    return { data, dir }
  }

  return async function cli (args) {
    const opts = minimist(args)
    const dir = opts._[0]

    const nameValidation = validateName(dir)
    if (nameValidation.errors) {
      log('error', `The given name is not valid: ${nameValidation.errors.join('\n')}`)
      process.exit(1)
    }

    if (dir && dir.length < 3) {
      log('error', 'application name must be at least 3 characters long')
      process.exit(1)
    }

    if (dir && existsSync(dir)) {
      if (dir !== '.' && dir !== './') {
        log('error', 'directory ' + opts._[0] + ' already exists')
        process.exit(1)
      }
    }
    if (dir === undefined) {
      log('error', 'must specify a directory to \'mfe create\'')
      process.exit(1)
    }

    try {
      const answers = await questions(dir)
      const templateData = {
        ...answers,
        titleAppName: camelCase(answers.appName),
        appPrefix: answers.appName.slice(0, answers.appName.length / 2 + 1).replace(' ', '').trim()
      }

      successInstructions(await generate(dir, { dir: answers.type }, templateData))
    } catch (err) {
      if (err) log('error', err.message)
      process.exit(1)
    }
  }
}

module.exports = { cli: cliWrapper }
