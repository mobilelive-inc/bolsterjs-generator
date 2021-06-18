import React from 'react'
import { useMxfp } from '@mobilelive-inc/mfxp'


export default function Landing () {
  const { welcome } = useMxfp()
  return (
    <>
      <h1 style={{"background":"lightBlue"}}>
      { welcome || 'An example welcome message from MFE' }
      </h1>
    </>
  )
}