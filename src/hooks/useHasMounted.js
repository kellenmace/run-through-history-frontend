import React from "react"

/**
 * Returns true if the component has mounted, else false.
 */
function useHasMounted() {
  const [hasMounted, setHasMounted] = React.useState(false)

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return hasMounted
}

export default useHasMounted
