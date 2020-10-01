import React from "react"
import { ApolloProvider } from "@apollo/client"
import { ToastProvider } from "react-toast-notifications"

import { NetworkProvider } from "./src/hooks/useNetwork"
import { client } from "./src/services/apollo"
import { AuthProvider } from "./src/hooks/useAuth"
import { SERVICE_WORKER_UPDATE_FOUND } from "./src/components/navLink"

export const wrapRootElement = ({ element }) => (
  <NetworkProvider>
    <ApolloProvider client={client}>
      <AuthProvider>
        <ToastProvider autoDismiss={true}>{element}</ToastProvider>
      </AuthProvider>
    </ApolloProvider>
  </NetworkProvider>
)

/**
 * Set global variable to true when service worker has found an
 * update. This is used to trigger a page reload on route change.
 */
export function onServiceWorkerUpdateReady() {
  window[SERVICE_WORKER_UPDATE_FOUND] = true
}
