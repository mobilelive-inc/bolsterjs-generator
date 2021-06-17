import React from 'react'
import { withMfxp } from '@mobilelive-inc/mfxp'


export default withMfxp(function Landing ({ welcome }) {
  return (
    <>
      <h1>
        {welcome || 'Some title to introduce the home page app.'}
      </h1>
    </>
  )
})
