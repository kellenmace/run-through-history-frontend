import {
  makeVar,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
} from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { onError } from "@apollo/client/link/error"
import { relayStylePagination } from "@apollo/client/utilities"
import fetch from "node-fetch"
import { v4 as uuidv4 } from "uuid"
import { TokenRefreshLink } from "apollo-link-token-refresh"
import decode from "jwt-decode"

import { setAuthData, deleteAuthData } from "../hooks/useAuth"
import { getPersistedAuthData } from "./auth"

const isBrowser = typeof window !== `undefined`
const persistedAuthData = isBrowser ? getPersistedAuthData() : null

/**
 * Reactive variable that stores auth data.
 * Docs: https://www.apollographql.com/docs/react/local-state/reactive-variables/
 */
export const apolloAuthData = makeVar({
  authToken: null,
  refreshToken: persistedAuthData?.refreshToken || null,
  user: persistedAuthData?.user || null,
})

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        apolloAuthData: {
          read() {
            return apolloAuthData()
          },
        },
        runs: relayStylePagination(),
      },
    },
  },
})

const getCurrentTimestampInSeconds = () => Math.floor(Date.now() / 1000)

const isTokenExpired = token =>
  decode(token).exp <= getCurrentTimestampInSeconds()

/**
 * Refresh auth token if it is expired.
 */
const tokenRefreshLink = new TokenRefreshLink({
  accessTokenField: `refreshJwtAuthToken`,
  isTokenValidOrUndefined: () => {
    const { authToken } = apolloAuthData()
    return !authToken || !isTokenExpired(authToken)
  },
  fetchAccessToken: () => {
    const { refreshToken } = apolloAuthData()
    const query = `
      mutation refreshJwtAuthToken($input: RefreshJwtAuthTokenInput!) {
        refreshJwtAuthToken(input: $input) {
          authToken
        }
      }
    `

    return fetch(process.env.GATSBY_WPGRAPHQL_URL, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          input: {
            clientMutationId: uuidv4(),
            jwtRefreshToken: refreshToken || ``,
          },
        },
      }),
    })
  },
  handleFetch: response => {
    const { authToken } = response
    setAuthData({ ...apolloAuthData(), authToken })
  },
  handleError: error => {
    console.error(error)
    deleteAuthData()
  },
})

/**
 * Include auth token in request headers.
 */
const authLink = setContext((_, { headers }) => {
  const { authToken } = apolloAuthData()

  return {
    headers: {
      ...headers,
      authorization: authToken ? `Bearer ${authToken}` : ``,
    },
  }
})

/**
 * Handle errors.
 */
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )
  if (networkError) console.error(`[Network error]: ${networkError}`)
})

/**
 * Update the authToken and refreshToken with the updated tokens
 * sent back in the response headers.
 */
const tokenUpdateLink = new ApolloLink((operation, forward) => {
  return forward(operation).map(response => {
    const {
      response: { headers },
    } = operation.getContext()

    if (headers) {
      const authToken = headers.get("x-jwt-auth")
      const refreshToken = headers.get("x-jwt-refresh")

      if (authToken) {
        setAuthData({ ...apolloAuthData(), authToken })
      }

      if (refreshToken) {
        setAuthData({ ...apolloAuthData(), refreshToken })
      }
    }

    return response
  })
})

/**
 * Handle HTTP requests.
 */
const httpLink = createHttpLink({
  uri: process.env.GATSBY_WPGRAPHQL_URL,
  fetch,
})

export const client = new ApolloClient({
  link: ApolloLink.from([
    tokenRefreshLink,
    authLink,
    errorLink,
    tokenUpdateLink,
    httpLink,
  ]),
  cache,
})
