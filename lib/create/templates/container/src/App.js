import React, { lazy, Suspense, useState, useEffect } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import Header from './components/Header'
import ProgressBar from './components/Progress'

// Required to avoid css collisions
const generateClassName = createGenerateClassName({
  productionPrefix: '__appPrefix__'
})

const history = createBrowserHistory()

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false)

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn} />
          <Suspense fallback={<ProgressBar />}>
            <Switch>
            {/* Add microfrontends here */}
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  )
}
