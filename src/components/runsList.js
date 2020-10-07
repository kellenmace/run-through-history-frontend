import React, { useState } from "react"
import { useQuery } from "@apollo/client"
import gql from "graphql-tag"
import InfiniteScroll from "react-infinite-scroller"
import styled from "styled-components"

import useAuth from "../hooks/useAuth"
import RunLoadingSkeletons from "./runLoadingSkeletons"
import RunLoadingSkeleton from "./runLoadingSkeleton"
import Run from "./run"

export const GET_RUNS = gql`
  query getRuns($first: Int!, $after: String, $userId: Int!) {
    runs(first: $first, after: $after, where: { author: $userId }) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          databaseId
          runFields {
            date
            miles
          }
        }
      }
    }
  }
`

const StyledUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  li + li {
    margin-top: 8px;
  }
`

const batchSize = 6

function RunsList() {
  const { user } = useAuth()
  const userId = user.databaseId
  const [fetchingNextPage, setFetchingNextPage] = useState(false)
  const { data, loading, error, fetchMore } = useQuery(GET_RUNS, {
    variables: { first: batchSize, after: null, userId },
  })

  async function fetchMoreRuns() {
    if (fetchingNextPage) return // To prevent multiple requests from firing simultaneously.
    setFetchingNextPage(true)
    await fetchMore({ variables: { after: data.runs.pageInfo.endCursor } })
    setFetchingNextPage(false)
  }

  if (error) {
    return <p>Sorry, an error has occurred. Please reload the page.</p>
  }

  if (!data && loading) {
    return <RunLoadingSkeletons />
  }

  if (!data) {
    return <p>No miles logged yet. Get out there and run!</p>
  }

  const runs = data.runs.edges.map(edge => edge.node)

  return (
    <StyledUl>
      <InfiniteScroll
        pageStart={0}
        hasMore={data?.runs?.pageInfo?.hasNextPage || false}
        loadMore={fetchMoreRuns}
        loader={<RunLoadingSkeleton key={0} style={{ marginTop: `8px` }} />}
      >
        {runs.map(run => (
          <Run key={run.databaseId} run={run} />
        ))}
      </InfiniteScroll>
    </StyledUl>
  )
}

export default RunsList
