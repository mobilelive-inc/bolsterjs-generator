import React from 'react'
import { useMfxp } from '@mobilelive-inc/mfxp'


export default function Landing () {
  const { welcome } = useMfxp()
  return (
    <>
      <h1 style={{"background":"lightBlue"}}>
      { welcome || 'An example welcome message from MFE' }
      </h1>
    </>
  )
}