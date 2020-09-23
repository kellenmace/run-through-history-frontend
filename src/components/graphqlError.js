import React from "react"
import parse from "html-react-parser"

import ErrorMessage from "./errorMessage"

function GraphQLError({ message }) {
  const parsedMessage = parse(message.replace(`GraphQL error: `, ``))

  return <ErrorMessage message={parsedMessage} />
}

export default GraphQLError
