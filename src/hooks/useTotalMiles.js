import gql from "graphql-tag"
import { useQuery } from "@apollo/client"

export const GET_TOTAL_MILES = gql`
  query getTotalMiles {
    viewer {
      userFields {
        totalMiles
      }
    }
  }
`

function useTotalMiles() {
  const { data, loading, error } = useQuery(GET_TOTAL_MILES)

  return {
    totalMiles: data?.viewer.userFields.totalMiles,
    loading,
    error,
  }
}

export default useTotalMiles
