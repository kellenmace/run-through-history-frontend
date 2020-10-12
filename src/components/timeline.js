import React from "react"
import parse from "html-react-parser"
import { Link } from "gatsby"
import styled from "styled-components"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"

import useTotalMiles from "../hooks/useTotalMiles"
import BadgeIcon from "./badgeIcon"
import MedalIcon from "./medalIcon"
import ResponsiveFeaturedImage from "./responsiveFeaturedImage"

const Container = styled.div`
  .image-container {
    max-width: 550px;
  }
  img {
    width: 100%;
  }
  .not-earned {
    filter: sepia(1) contrast(0.02);
  }
  .title-link {
    text-decoration: none;
  }
  .vertical-timeline-element-content {
    box-shadow: var(--box-shadow-2);
  }
  .vertical-timeline--two-columns
    .vertical-timeline-element-content
    .vertical-timeline-element-date {
    font-weight: 800;
    color: var(--color-yellow-5);
    @media only screen and (min-width: 1170px) {
      padding-top: 6px;
      padding-bottom: 0;
    }
  }
`

function Timeline({ awards }) {
  const { totalMiles, loading, error } = useTotalMiles()

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>An error has occurred. Please reload the page.</p>
  }

  return (
    <Container>
      <VerticalTimeline>
        {awards.map(award => {
          const {
            databaseId,
            slug,
            title,
            content,
            milesRequired,
            awardType,
            featuredImage,
          } = award
          const isMedal = awardType === `medal`
          const hasUserEarned = milesRequired <= totalMiles

          return (
            <VerticalTimelineElement
              key={databaseId}
              date={milesRequired ? `${milesRequired} AD` : `START!`}
              icon={isMedal ? <MedalIcon /> : <BadgeIcon />}
              iconStyle={{
                background: "var(--color-grey-6)",
                color: "var(--color-white)",
              }}
            >
              {featuredImage && (
                <div className="image-container">
                  {hasUserEarned ? (
                    <Link to={`/awards/${slug}`}>
                      <ResponsiveFeaturedImage
                        featuredImage={featuredImage}
                        loading="lazy"
                      />
                    </Link>
                  ) : (
                    <ResponsiveFeaturedImage
                      featuredImage={featuredImage}
                      className="not-earned"
                      loading="lazy"
                    />
                  )}
                </div>
              )}
              {hasUserEarned ? (
                <Link to={`/awards/${slug}`} className="title-link">
                  <h3>{parse(title)}</h3>
                </Link>
              ) : (
                <h3>???</h3>
              )}
              {hasUserEarned ? (
                <div>{parse(content)}</div>
              ) : (
                <p>Not yet earned</p>
              )}
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </Container>
  )
}

export default Timeline
