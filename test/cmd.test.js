'use strict'

const { test } = require('tap')

test('should return a function from create interface', ({ plan, ok }) => {
  plan(1)
  const create = require('../lib/create')
  ok(typeof create.cli === 'function')
})

test('cli should err when initialized without log', ({ plan, throws }) => {
  plan(1)
  const cmd = require('..')
  throws(() => cmd(), 'log must not be undefined')
})

test('cli should err when initialized without a log function', ({ plan, throws }) => {
  plan(1)
  const cmd = require('..')
  throws(() => cmd({}), 'log must not be undefined')
})
