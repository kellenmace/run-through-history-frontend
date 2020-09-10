import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

function HallBackgroundImage(props) {
  const { className } = props
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hall.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <BackgroundImage
      Tag="div"
      fluid={data.placeholderImage.childImageSharp.fluid}
      backgroundColor={`#E8E6E1`}
      className={className}
    >
      {props.children}
    </BackgroundImage>
  )
}

export default HallBackgroundImage
