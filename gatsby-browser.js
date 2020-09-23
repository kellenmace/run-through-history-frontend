import React from "react"
import { ApolloProvider } from "@apollo/client"
import { ToastProvider } from "react-toast-notifications"

import { NetworkProvider } from "./src/hooks/useNetwork"
import { client } from "./src/services/apollo"
import { AuthProvider } from "./src/hooks/useAuth"

export const wrapRootElement = ({ element }) => (
  <NetworkProvider>
    <ApolloProvider client={client}>
      <AuthProvider>
        <ToastProvider autoDismiss={true}>{element}</ToastProvider>
      </AuthProvider>
    </ApolloProvider>
  </NetworkProvider>
)
