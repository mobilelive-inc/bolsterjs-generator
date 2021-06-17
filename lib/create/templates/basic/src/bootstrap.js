import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { experience, StandaloneExperience } from 'mfxp'

export default experience(
  App, 
  ReactDOM.render, 
  <StandaloneExperience welcome="An example welcome message"/>
)