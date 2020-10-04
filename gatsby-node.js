const path = require("path")
const orderBy = require("lodash/orderBy")
const { rest } = require("lodash")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const addRunTemplate = path.resolve(`src/templates/add-run.js`)

  const awardsQuery = await graphql(`
    query getAwards {
      allWpAward {
        nodes {
          databaseId
          slug
          title
          content
          awardFields {
            milesRequired
          }
          awardTypes {
            nodes {
              slug
            }
          }
          featuredImage {
            node {
              sourceUrl
              altText
              mediaDetails {
                sizes {
                  width
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
  `)

  if (awardsQuery.errors) {
    throw awardsQuery.errors
  }

  const awards = formatAndSortAwards(awardsQuery.data.allWpAward.nodes)

  // Create Add Run page
  console.log(`Creating page: /add-run`)
  createPage({
    path: `/add-run`,
    component: addRunTemplate,
    context: {
      awards,
    },
  })
}

function formatAndSortAwards(awards) {
  const formattedAwards = awards
    .map(formatAwardData)
    .map(correctNullMilesRequiredValue)

  return orderBy(formattedAwards, `milesRequired`)
}

function formatAwardData(award) {
  const {
    awardFields: { milesRequired },
    awardTypes: { nodes: awardTypes },
    featuredImage: { node: featuredImage },
    ...rest
  } = award
  const awardType = awardTypes.length ? awardTypes[0].slug : ``

  return {
    milesRequired,
    awardType,
    featuredImage,
    ...rest,
  }
}

// Account for a bug where awards with a milesRequired value of 0
// show up as `null` in the GraphQL API.
// @see https://github.com/wp-graphql/wp-graphql-acf/issues/164
function correctNullMilesRequiredValue(award) {
  const { milesRequired } = award

  if (milesRequired !== null) return award

  return {
    ...award,
    milesRequired: 0,
  }
}
