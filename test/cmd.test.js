'use strict'

const { test } = require('tap')
const { spawn } = require('child_process')
const { once } = require('events')
const path = require('path')

test('with invalid command cli logs and exits erroneusly', async ({ ok }) => {
  const cmd = spawn('node', [path.join(__dirname, '../cmd.js')])
  await once(cmd, 'close')
  ok(cmd.exitCode === 1)
})
