import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/client"

import { apolloAuthData } from "../services/apollo"
import { setPersistedAuthData, deletePersistedAuthData } from "../services/auth"

const AuthContext = React.createContext()

const GET_APOLLO_AUTH_DATA = gql`
  query getApolloAuthData {
    apolloAuthData @client
  }
`

export function AuthProvider({ children }) {
  const { data } = useQuery(GET_APOLLO_AUTH_DATA)
  const signedIn = !!data?.apolloAuthData?.authToken
  const user = data?.apolloAuthData?.user

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
