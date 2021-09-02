import React from 'react'
import { useBolster } from '@mobilelive-inc/bolsterjs'


export default function Landing () {
  const { welcome } = useBolster()
  return (
    <>
      <h1 style={{"background":"lightBlue"}}>
      { welcome || 'An example welcome message from MFE' }
      </h1>
    </>
  )
}