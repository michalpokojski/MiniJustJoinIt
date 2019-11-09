import React from 'react'
import Paper from '@material-ui/core/Paper'
import { Typography } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'
import useOffersConnector from 'hooksConnectors/useOffersConnector'

const useStyles = makeStyles(theme => ({
  offersContainer: {
    padding: theme.spacing(2),
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gridGap: theme.spacing(2)
  },
  offer: {
    padding: theme.spacing(2)
  }
}))

const OffersMainScreen = () => {
  const offers = useOffersConnector()
  console.log(offers)

  const classes = useStyles()

  return (
    <div className={classes.offersContainer}>
      {offers.map(offer => {
        return (
          <Paper key={offer.id} className={classes.offer}>
            <Typography component='h3'>{offer.title}</Typography>
          </Paper>
        )
      })}
    </div>
  )
}

export default OffersMainScreen
