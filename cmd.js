#!/usr/bin/env node

'use strict'

const cmd = require('commist')()
const create = require('./lib/create/')
const log = require('./lib/log')

const result = cmd.register('create', create.cli)
  .parse(process.argv.splice(2))

if (result) {
  log('error', 'No command called')
  log('error', 'mfe command requires argument create')
}
