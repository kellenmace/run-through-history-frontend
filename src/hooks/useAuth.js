import React from "react"

import { apolloAuthData } from "../services/apollo"
import { setPersistedAuthData, deletePersistedAuthData } from "../services/auth"

const AuthContext = React.createContext()

export function AuthProvider({ children }) {
  const { authToken, user } = apolloAuthData()
  const signedIn = !!authToken

  function setAuthData(authData) {
    const { refreshToken, user } = authData
    apolloAuthData(authData)
    setPersistedAuthData({ refreshToken, user })
  }

  function deleteAuthData() {
    apolloAuthData({
      authToken: null,
      refreshToken: null,
      user: null,
    })
    deletePersistedAuthData()
  }

  const value = {
    signedIn,
    user,
    setAuthData,
    deleteAuthData,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

const useAuth = () => React.useContext(AuthContext)

export default useAuth
