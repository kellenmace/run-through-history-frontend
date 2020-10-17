import React from "react"

import useSounds from "../hooks/useSounds"
import HorizontalRadios from "./horizontalRadios"

function LeaderboardSwitcher({ views, view, setView }) {
  const { playPopDownSound } = useSounds()

  function handleChange(e) {
    setView(e.target.value)
    playPopDownSound()
  }

  return (
    <HorizontalRadios>
      <legend className="screen-reader">Leaderboard to Display</legend>
      <div className="inputs">
        <input
          type="radio"
          id={views.myAgeGroup}
          className="screen-reader"
          name="view"
          value={views.myAgeGroup}
          checked={view === views.myAgeGroup}
          onChange={handleChange}
        />
        <label htmlFor={views.myAgeGroup}>My group</label>
        <input
          type="radio"
          id={views.female}
          className="screen-reader"
          name="view"
          value={views.female}
          checked={view === views.female}
          onChange={handleChange}
        />
        <label htmlFor={views.female}>All female</label>
        <input
          type="radio"
          id={views.male}
          className="screen-reader"
          name="view"
          value={views.male}
          checked={view === views.male}
          onChange={handleChange}
        />
        <label htmlFor={views.male}>All male</label>
      </div>
    </HorizontalRadios>
  )
}

export default LeaderboardSwitcher
