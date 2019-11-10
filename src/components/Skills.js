import PropTypes from 'prop-types'
import React from 'react'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import Tooltip from '@material-ui/core/Tooltip'
import makeStyles from '@material-ui/core/styles/makeStyles'
import SkillStars from 'components/SkillStars'
import { getInitials } from 'helpers/string'

const useStyles = makeStyles(theme => ({
  skillsContainer: {
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
    '& > div:not(:first-child)': {
      marginLeft: theme.spacing(2)
    }
  },
  fullSkillAvatar: {
    width: 'auto !important',
    borderRadius: theme.spacing(4),
    padding: theme.spacing(1)
  }
}))

const Skills = ({ skills, offerId, fullSkill }) => {
  const classes = useStyles()
  return (
    <div className={classes.skillsContainer}>
      {skills.map((skill, index) => {
        return (
          <Chip
            key={offerId + 'skill#' + index}
            avatar={
              <Tooltip title={skill.name}>
                <Avatar className={fullSkill && classes.fullSkillAvatar}>
                  {fullSkill ? skill.name : getInitials(skill.name)}
                </Avatar>
              </Tooltip>
            }
            label={<SkillStars stars={skill.level} />}
          />
        )
      })}
    </div>
  )
}

Skills.propTypes = {
  offerId: PropTypes.string,
  skills: PropTypes.array,
  fullSkill: PropTypes.bool
}

Skills.defaultProps = {
  skills: []
}

export default Skills
