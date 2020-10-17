import gql from "graphql-tag"
import { useQuery } from "@apollo/client"
import { orderBy } from "lodash"

export const GET_LEADERBOARD = gql`
  query getLeaderboard($sex: UserSexEnum, $ageGroup: UserAgeGroupEnum) {
    users(first: 750, after: null, where: { sex: $sex, ageGroup: $ageGroup }) {
      nodes {
        id
        databaseId
        firstName
        lastName
        sex
        ageGroup
        userFields {
          city
          state
          totalMiles
        }
      }
    }
  }
`

export const sexEnum = {
  female: `FEMALE`,
  male: `MALE`,
}

function useLeaderboard({ sex = null, ageGroup = null }) {
  const { data, loading, error } = useQuery(GET_LEADERBOARD, {
    variables: {
      sex: sex ? sexEnum[sex] : `FEMALE`,
      ageGroup: ageGroup ? `_${ageGroup}` : null,
    },
  })

  const leaderboard = data ? formatData(data) : undefined

  return { leaderboard, loading, error }
}

export default useLeaderboard

function formatData(data) {
  const nodes = orderByTotalMilesDescending(
    removeRunnersWithNoMiles(data.users.nodes)
  )

  const ageGroups = [
    {
      ageGroup: `0_10`,
      label: `Under 10`,
      runners: nodes.filter(runner => runner.ageGroup === `0_10`),
    },
    {
      ageGroup: `10_20`,
      label: `10 to 20`,
      runners: nodes.filter(runner => runner.ageGroup === `10_20`),
    },
    {
      ageGroup: `20_30`,
      label: `20 to 30`,
      runners: nodes.filter(runner => runner.ageGroup === `20_30`),
    },
    {
      ageGroup: `30_40`,
      label: `30 to 40`,
      runners: nodes.filter(runner => runner.ageGroup === `30_40`),
    },
    {
      ageGroup: `40_50`,
      label: `40 to 50`,
      runners: nodes.filter(runner => runner.ageGroup === `40_50`),
    },
    {
      ageGroup: `50_60`,
      label: `50 to 60`,
      runners: nodes.filter(runner => runner.ageGroup === `50_60`),
    },
    {
      ageGroup: `60_70`,
      label: `60 to 70`,
      runners: nodes.filter(runner => runner.ageGroup === `60_70`),
    },
    {
      ageGroup: `70_120`,
      label: `70 or better`,
      runners: nodes.filter(runner => runner.ageGroup === `70_120`),
    },
  ]

  return removeEmptyAgeGroups(ageGroups)
}

function removeRunnersWithNoMiles(nodes) {
  return nodes.filter(runner => !!runner.userFields.totalMiles)
}

function orderByTotalMilesDescending(nodes) {
  return orderBy(nodes, `userFields.totalMiles`, `desc`)
}

function removeEmptyAgeGroups(leaderboard) {
  return leaderboard.filter(ageGroup => !!ageGroup.runners.length)
}
