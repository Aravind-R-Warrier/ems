import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext=createContext()
function AuthProvider({children}) {
// localStorage.clear()
// setLocalStorage()

  const[userData,setUserData]=useState()

  useEffect(()=>{
    const{employees}=getLocalStorage()
    setUserData(employees)
  },[])

  return (
    <div>
      <AuthContext.Provider value={[userData,setUserData]}>
      {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
