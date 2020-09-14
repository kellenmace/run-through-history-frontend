import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/client"

import { apolloAuthData, client } from "../services/apollo"
import { setRefreshToken, deleteRefreshToken } from "../services/auth"

const AuthContext = React.createContext()

const GET_APOLLO_AUTH_DATA = gql`
  query getApolloAuthData {
    apolloAuthData @client
  }
`

export function AuthProvider({ children }) {
  const { data } = useQuery(GET_APOLLO_AUTH_DATA)
  const signedIn = !!data?.apolloAuthData?.authToken
  const user = data?.apolloAuthData?.user || null

  function setAuthData(authData) {
    apolloAuthData(authData)
    setRefreshToken(authData.refreshToken)
  }

  function deleteAuthData() {
    apolloAuthData({
      authToken: null,
      refreshToken: null,
      user: null,
    })
    client.clearStore()
    deleteRefreshToken()
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
