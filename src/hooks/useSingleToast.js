import { useRef } from "react"
import { useToasts } from "react-toast-notifications"

/**
 * Renders one toast notification at a time.
 */
function useSingleToast() {
  const toastIdRef = useRef(undefined)
  const { addToast, removeToast } = useToasts()

  function addSingleToast(content, options) {
    removeToast(toastIdRef.current)
    addToast(content, options, toastId => (toastIdRef.current = toastId))
  }

  return { addSingleToast }
}

export default useSingleToast
