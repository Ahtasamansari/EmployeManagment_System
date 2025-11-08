import React, { useState } from 'react'
import { MyContext } from './my-context'

  function Context({children})  {
  const [user , setUser]=useState(null)
  const initialState = {user, setUser}
  return (
    <MyContext.Provider value={initialState}>{children}</MyContext.Provider>
  )
}

export default Context
