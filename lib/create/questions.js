'use strict'

const { prompt } = require('enquirer')

const projectTypes = [
  {
    type: 'basic',
    name: 'Basic Application'
  },
  {
    type: 'container',
    name: 'Micro Frontend Container'
  }
]


prompt.on('cancel', () => {
  process.exit(1)
})

function questions (appName) {
  const questions = [
    {
      type: 'input',
      name: 'appName',
      message: 'Confirm name of the application:',
      initial: () => appName.replace(/@.+\//, ''),
      result: (res) => res.trim()
    },
    {
      type: 'select',
      name: 'type',
      message: 'Select the project type:',
      hint: '(Use arrow keys)',
      choices: projectTypes,
      result: (answer) => {
        const result = projectTypes.find(obj => obj.name === answer)
        return result.type
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Project description:',
      result: (res) => res.trim()
    },
    {
      type: 'input',
      name: 'port',
      hint: "Can be between 1024-49151, as long as it's free",
      message: 'Select port to execute this application on:',
      validate: (port) => {
        const test = parseInt(port)
        if (test && test > 1024 && test < 49151) {
          return true
        } else {
          return 'Port must be a valid number between 1024 and 49151'
        }
      },
      result: (res) => res.trim()
    }
  ]

  return prompt(questions)
}

module.exports = {
  questions
}
