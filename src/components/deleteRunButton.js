import React from "react"
import { useMutation } from "@apollo/client"
import gql from "graphql-tag"
import { v4 as uuidv4 } from "uuid"
import styled from "styled-components"

import useSingleToast from "../hooks/useSingleToast"
import useRefetchQueries from "../hooks/useRefetchQueries"
import XIcon from "./xIcon"

const DELETE_RUN = gql`
  mutation deleteRun($clientMutationId: String!, $id: ID!) {
    deleteRun(input: { clientMutationId: $clientMutationId, id: $id }) {
      deletedId
    }
  }
`

const StyledDiv = styled.div`
  display: flex;
  button {
    margin-left: 10px;
  }
`

const StyledButton = styled.button`
  background: none;
  position: absolute;
  top: -3px;
  right: -3px;
  padding: 8px;
  color: var(--color-grey-7);
  font-size: 0.8rem;
  line-height: 0.8rem;
`

function DeleteRunButton(props) {
  const { id } = props
  const refetchQueries = useRefetchQueries()
  const { addSingleToast } = useSingleToast()
  const [deleteRun] = useMutation(DELETE_RUN, { refetchQueries })

  function handleConfirmationClick() {
    addSingleToast(`Deleting run...`, { appearance: "success" })
    deleteRun({
      variables: {
        clientMutationId: uuidv4(),
        id,
      },
    }).then(() => addSingleToast(`Run deleted.`, { appearance: "success" }))
  }

  function handleXClick() {
    addSingleToast(
      <StyledDiv>
        <p>Delete run?</p>
        <button onClick={handleConfirmationClick}>Delete</button>
      </StyledDiv>,
      { appearance: "error" }
    )
  }

  return (
    <StyledButton onClick={handleXClick}>
      <XIcon />
    </StyledButton>
  )
}

export default DeleteRunButton
