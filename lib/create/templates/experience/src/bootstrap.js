import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { experience, StandaloneExperience } from '@mobilelive-inc/bolsterjs'

export default experience(
  App, 
  ReactDOM.render, 
  <StandaloneExperience welcome="An example welcome message from MFE"/>
)
