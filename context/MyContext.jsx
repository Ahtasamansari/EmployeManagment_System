import React, { useState } from 'react'
import { createContext } from 'react'

export const myContext = createContext()

  function Context({children})  {
  const [user , setUser]=useState(null)
  const initialState = {user, setUser}
  return (
    <div>
    <myContext.Provider value={initialState}>{children}</myContext.Provider>     
    </div>
  )
}

export default Context
