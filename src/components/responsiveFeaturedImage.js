import React from "react"
import { orderBy } from "lodash"

function ResponsiveFeaturedImage(props) {
  const {
    featuredImage: {
      sourceUrl,
      altText,
      mediaDetails: { sizes: mediaDetailsSizes },
    },
    ...otherProps
  } = props

  const sizesArrayFormatted = mediaDetailsSizes.map(size => ({
    ...size,
    width: Number(size.width),
  }))
  const sizesArrayOrdered = orderBy(sizesArrayFormatted, `width`)
  const srcSet = sizesArrayOrdered
    .map(({ sourceUrl, width }) => `${sourceUrl} ${width}w`)
    .join(`, `)

  return (
    <img
      src={sourceUrl}
      srcSet={srcSet}
      sizes="(max-width: 600px) 100vw, 600px"
      alt={altText}
      {...otherProps}
    />
  )
}

export default ResponsiveFeaturedImage
