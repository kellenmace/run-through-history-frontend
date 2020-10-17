import React, { createContext, useContext } from "react"
import useSound from "use-sound"

import popDownSound from "../sounds/pop-down.mp3"
import marioCoinSound from "../sounds/mario-coin.mp3"
import applauseSound from "../sounds/applause.mp3"
import fanfareSound from "../sounds/fanfare.mp3"

const SoundsContext = createContext()

export function SoundsProvider({ children }) {
  const [playPopDownSound] = useSound(popDownSound, { volume: 0.25 })
  const [playMarioCoinSound] = useSound(marioCoinSound, { volume: 0.25 })
  const [playApplauseSound] = useSound(applauseSound, { volume: 0.25 })
  const [playFanfareSound] = useSound(fanfareSound, { volume: 0.25 })

  const value = {
    playPopDownSound,
    playMarioCoinSound,
    playApplauseSound,
    playFanfareSound,
  }

  return (
    <SoundsContext.Provider value={value}>{children}</SoundsContext.Provider>
  )
}

const useSounds = () => useContext(SoundsContext)

export default useSounds
