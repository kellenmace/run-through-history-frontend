import React from "react"
import { random } from "lodash"

import Emoji from "./emoji"

function RandomSuccessMessage() {
  const messages = [
    <p>
      Run added! <Emoji symbol="👍🏼" label="Thumbs up" />
    </p>,
    <p>
      Nice work! <Emoji symbol="🙌🏼" label="Raised hands" />
    </p>,
    <p>
      You rule! <Emoji symbol="💃🏻" label="Woman dancing" />
      <Emoji symbol="🕺🏼" label="Man dancing" />
    </p>,
    <p>
      Nicely done! <Emoji symbol="🎉" label="Party popper" />
    </p>,
    <p>
      Great job! <Emoji symbol="🙌🏼" label="Raised hands" />
    </p>,
    <p>
      Nice run! <Emoji symbol="🏃‍♀️" label="Woman running" />
      <Emoji symbol="💨" label="Dust cloud" />
    </p>,
    <p>
      You're on fiyahhh! <Emoji symbol="🔥" label="Fire" />
    </p>,
    <p>
      Booyah! <Emoji symbol="💥" label="Boom" />
    </p>,
    <p>
      Aww yeah! <Emoji symbol="🙌🏼" label="Raised hands" />
    </p>,
  ]

  const randomKey = random(0, messages.length - 1)

  return messages[randomKey]
}

export default RandomSuccessMessage
