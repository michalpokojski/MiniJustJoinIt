import PropTypes from 'prop-types'
import React from 'react'
import range from 'ramda/src/range'
import Star from '@material-ui/icons/Star'
import StarBorder from '@material-ui/icons/StarBorder'

const SkillStars = ({ stars }) => {
  const starsArray = range(1, 6)
  return (
    <span>
      {starsArray.map((starNumber) => (
        starNumber > stars ? <StarBorder key={starNumber} /> : <Star key={starNumber} />
      ))}
    </span>
  )
}

SkillStars.propTypes = {
  stars: PropTypes.number.isRequired
}

export default SkillStars
