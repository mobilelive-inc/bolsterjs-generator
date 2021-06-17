import React, { Suspense } from 'react'
import { Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import Header from './components/Header'

import mfxp from '@mobilelive-inc/mfxp'

// Example of importing an experience to the container
// const MyAppExperience = mfxp(import('myapp/experience'))


// Required to avoid css collisions
const generateClassName = createGenerateClassName({
  productionPrefix: '__appPrefix__'
})

const history = createBrowserHistory()

export default () => {

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Suspense fallback={'loading...'}>
            <Switch>
              {/* Add microfrontends here */}
              {/* <MyAppExperience welcome="test" />*/}
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  )
}
