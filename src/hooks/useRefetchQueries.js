import useAuth from "./useAuth"
import { GET_TOTAL_MILES } from "./useTotalMiles"
import { GET_LEADERBOARD, sexEnum } from "./useLeaderboard"
import { GET_RUNS, batchSize } from "../components/runsList"

function useRefetchQueries() {
  const { user } = useAuth()
  const userId = user.databaseId

  return [
    { query: GET_TOTAL_MILES },
    {
      // Refresh the user's list of runs.
      query: GET_RUNS,
      variables: { first: batchSize, after: null, userId },
    },
    {
      // Refetch leaderboard counts for user's age group.
      query: GET_LEADERBOARD,
      variables: {
        sex: sexEnum[user.sex],
        ageGroup: `_${user.ageGroup}`,
      },
    },
    {
      // Refetch leaderboard counts for user's sex.
      query: GET_LEADERBOARD,
      variables: {
        sex: sexEnum[user.sex],
      },
    },
  ]
}

export default useRefetchQueries
