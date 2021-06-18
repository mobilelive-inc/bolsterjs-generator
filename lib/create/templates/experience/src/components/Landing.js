import React from 'react'
import { withMfxp } from '@mobilelive-inc/mfxp'


export default withMfxp(function Landing ({ welcome }) {
  return (
    <>
      <h1 style={{"background":"lightBlue"}}>
      { welcome || 'An example welcome message from MFE' }
      </h1>
    </>
  )
})
