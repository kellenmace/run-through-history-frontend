import React from "react"
import { ApolloProvider } from "@apollo/client"

import { client } from "./src/services/apollo"
import { AuthProvider } from "./src/hooks/useAuth"

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>
    <AuthProvider>{element}</AuthProvider>
  </ApolloProvider>
)
