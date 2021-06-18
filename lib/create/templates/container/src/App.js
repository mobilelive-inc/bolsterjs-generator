import React, { Suspense } from 'react'
import { Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'
import mfxp from '@mobilelive-inc/mfxp'

import Header from './components/Header'

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
              {/* <Route>
                <MyAppExperience welcome="Communicating state to MFE" />
              </Route> */}
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  )
}
