import React from "react"
import gql from "graphql-tag"
import { useQuery } from "@apollo/client"

import { apolloAuthData, client } from "../services/apollo"
import { setPersistedAuthData, deletePersistedAuthData } from "../services/auth"
import useAuthTokenRefresher from "./useAuthTokenRefresher"

const AuthContext = React.createContext()

const GET_APOLLO_AUTH_DATA = gql`
  query getApolloAuthData {
    apolloAuthData @client
  }
`

export function setAuthData(authData) {
  const { refreshToken, user } = authData
  apolloAuthData(authData)
  setPersistedAuthData({ refreshToken, user })
}

export function deleteAuthData() {
  apolloAuthData({
    authToken: null,
    refreshToken: null,
    user: null,
  })
  client.resetStore()
  deletePersistedAuthData()
}

export function AuthProvider({ children }) {
  const { data } = useQuery(GET_APOLLO_AUTH_DATA)
  const signedIn = !!data.apolloAuthData?.authToken
  const user = data.apolloAuthData?.user

  useAuthTokenRefresher(data.apolloAuthData, setAuthData, deleteAuthData)

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
