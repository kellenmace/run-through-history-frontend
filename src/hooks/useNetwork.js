import React from "react"

import useHasMounted from "./useHasMounted"

const NetworkContext = React.createContext()

export function NetworkProvider({ children }) {
  const hasMounted = useHasMounted()
  const initialValue = hasMounted ? window.navigator.onLine : true
  const [isOnline, setNetwork] = React.useState(initialValue)
  const updateNetwork = () => setNetwork(window.navigator.onLine)

  React.useEffect(() => {
    window.addEventListener(`offline`, updateNetwork)
    window.addEventListener(`online`, updateNetwork)
    return () => {
      window.removeEventListener(`offline`, updateNetwork)
      window.removeEventListener(`online`, updateNetwork)
    }
  })

  return (
    <NetworkContext.Provider value={isOnline}>
      {children}
    </NetworkContext.Provider>
  )
}

const useNetwork = () => React.useContext(NetworkContext)

export default useNetwork
