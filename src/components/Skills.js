import React from 'react'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import Tooltip from '@material-ui/core/Tooltip'
import makeStyles from '@material-ui/core/styles/makeStyles'
import SkillStars from 'components/SkillStars'
import { getInitials } from 'helpers/string'

const useStyles = makeStyles(theme => ({
  skillsContainer: {
    '& > div:not(:first-child)': {
      marginLeft: theme.spacing(2)
    }
  }
}))

const Skills = ({ skills, offerId }) => {
  const classes = useStyles()
  return (
    <div className={classes.skillsContainer}>
      {skills.map((skill, index) => {
        return (
          <Chip
            key={offerId + 'skill#' + index}
            avatar={
              <Tooltip title={skill.name}>
                <Avatar>{getInitials(skill.name)}</Avatar>
              </Tooltip>
            }
            label={<SkillStars stars={skill.level} />}
          />
        )
      })}
    </div>
  )
}

export default Skills
