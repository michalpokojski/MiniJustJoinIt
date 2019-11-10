import * as PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import Paper from '@material-ui/core/Paper'
import makeStyles from '@material-ui/core/styles/makeStyles'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import ArrowForward from '@material-ui/icons/ArrowForward'
import Skills from 'components/Skills'
import IconButton from '@material-ui/core/IconButton'
import prop from 'ramda/src/prop'
import { tranctuate } from 'helpers/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  offer: {
    transition: 'all .3s',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: ({ isSelected }) => isSelected ? theme.palette.background.paper : theme.palette.action.hover,
      boxShadow: theme.shadows[6]
    },
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    gridColumn: ({ isSelected }) => isSelected ? 'span 2' : 'auto',
    gridRow: ({ isSelected }) => isSelected ? 'span 2' : 'auto'
  },
  cardTitle: tranctuate,
  salary: {
    color: 'green',
    whiteSpace: 'nowrap',
    marginLeft: theme.spacing(1)
  },
  city: {
    marginLeft: 'auto',
    marginRight: 'auto',
    flex: '1 1'
  }
}))

const Offer = ({ selectedOffer, handleSelectOffer, offer, redirectToOffer }) => {
  const isSelected = useMemo(() => prop('id', selectedOffer) === offer.id, [selectedOffer, offer])
  const classes = useStyles({ isSelected })
  return (
    <Paper
      className={classes.offer}
      elevation={3}
      onClick={isSelected ? handleSelectOffer({}) : handleSelectOffer(offer)}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar alt='Remy Sharp' src={offer.company_logo_url} />
        </ListItemAvatar>
        <ListItemText
          primaryTypographyProps={{
            className: isSelected ? '' : classes.cardTitle,
            component: 'h3'
          }}
          primary={offer.title}
          secondary={offer.company_name}
        />
        {isSelected && (
          <Typography className={classes.city}>{offer.city} - {offer.street}</Typography>
        )}
        {offer.salary_from && (
          <Typography className={classes.salary}>
            {offer.salary_from} - {offer.salary_to} {offer.salary_currency}
          </Typography>
        )}
        {isSelected && (
          <IconButton onClick={redirectToOffer(offer.id)}>
            <ArrowForward />
          </IconButton>
        )}
      </ListItem>
      {isSelected && offer.skills && (
        <Skills skills={offer.skills} offerId={offer.id} />
      )}
    </Paper>
  )
}

Offer.propTypes = {
  handleSelectOffer: PropTypes.func.isRequired,
  offer: PropTypes.object.isRequired,
  redirectToOffer: PropTypes.func.isRequired,
  selectedOffer: PropTypes.any
}

export default Offer
