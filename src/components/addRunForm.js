import React, { useState, useEffect } from "react"
import gql from "graphql-tag"
import { useMutation } from "@apollo/client"
import { v4 as uuidv4 } from "uuid"
import { navigate } from "gatsby"
import { useToasts } from "react-toast-notifications"
import styled from "styled-components"

import useSounds from "../hooks/useSounds"
import useRefetchQueries from "../hooks/useRefetchQueries"
import useTotalMiles from "../hooks/useTotalMiles"
import ErrorMessage from "./errorMessage"
import RandomSuccessMessage from "./randomSuccessMessage"

const CREATE_RUN = gql`
  mutation createRun(
    $clientMutationId: String!
    $date: String!
    $miles: Float!
  ) {
    createRun(
      input: {
        clientMutationId: $clientMutationId
        status: PUBLISH
        runDate: $date
        miles: $miles
      }
    ) {
      run {
        author {
          node {
            userFields {
              totalMiles
            }
          }
        }
      }
    }
  }
`

const StyledForm = styled.form`
  label {
    display: block;
  }
  label + label {
    margin-top: 1rem;
  }
  input {
    display: block;
    width: 100%;
  }
  .error-container {
    margin-top: 1.5rem;
  }
  button {
    margin-top: 1.5rem;
  }
`

function AddRunForm({ awards }) {
  const refetchQueries = useRefetchQueries()
  const { addToast } = useToasts()
  const {
    playMarioCoinSound,
    playApplauseSound,
    playFanfareSound,
  } = useSounds()
  const { totalMiles } = useTotalMiles()
  const prevTotalMiles = totalMiles || 0
  const [createRun, { loading, error, data }] = useMutation(CREATE_RUN, {
    refetchQueries,
  })
  const [date, setDate] = useState(
    () => new Date().toISOString().split("T")[0] // Current date in yyyy-mm-dd format.
  )
  const [miles, setMiles] = useState(``)
  const endsWithDecimal = value => value.endsWith(`.`)
  const roundToOneDecimal = value => Math.round(value * 10) / 10

  function handleMilesInputChange(event) {
    const { value } = event.target
    if (`` === value) {
      setMiles(value)
      return
    }

    if (endsWithDecimal(value)) {
      setMiles(value)
      return
    }

    setMiles(roundToOneDecimal(value))
  }

  function handleSubmit(event) {
    event.preventDefault()

    createRun({
      variables: {
        clientMutationId: uuidv4(),
        date,
        miles,
      },
    })
  }

  // Handle successful run creation
  useEffect(() => {
    // TODO:
    // This is sometimes firing three times. Maybe implement a "lock".
    if (!data) return

    const newTotalMiles = data.createRun.run.author.node.userFields.totalMiles
    const hasUserAlreadyEarned = award => award.milesRequired <= prevTotalMiles
    const hasUserNotYetEarned = award => award.milesRequired > newTotalMiles
    const awardsEarned = awards
      .filter(medal => !hasUserAlreadyEarned(medal))
      .filter(medal => !hasUserNotYetEarned(medal))
    const didUserEarnAward = !!awardsEarned.length

    if (didUserEarnAward) {
      playApplauseSound()
      playFanfareSound()
      addToast(`You won a new award! Congratulations!!! 🎉`, {
        appearance: "success",
      })

      const awardToNavigateTo = awardsEarned[awardsEarned.length - 1]
      navigate(`/awards/${awardToNavigateTo.slug}`)
      return
    }

    playMarioCoinSound()
    addToast(<RandomSuccessMessage />, { appearance: "success" })
    navigate(`/runs`)
  }, [
    data,
    prevTotalMiles,
    awards,
    addToast,
    playApplauseSound,
    playFanfareSound,
    playMarioCoinSound,
  ])

  return (
    <StyledForm method="post" onSubmit={handleSubmit}>
      <label htmlFor="date">
        Date
        <input
          type="date"
          name="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          min="2020-10-01"
          max="2020-12-31"
          required
        />
      </label>
      <label htmlFor="miles">
        Miles
        <input
          type="number"
          name="miles"
          step="0.1"
          min="0.1"
          max="100"
          inputMode="decimal"
          value={miles}
          onChange={handleMilesInputChange}
          required
        />
      </label>
      {error && (
        <div className="error-container">
          <ErrorMessage message={error.message} />
        </div>
      )}
      <button type="submit" disabled={loading}>
        {loading ? `Adding...` : `Add`}
      </button>
    </StyledForm>
  )
}

export default AddRunForm
