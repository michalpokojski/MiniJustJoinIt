import React, { useCallback, useMemo, useState } from 'react'
import Paper from '@material-ui/core/Paper'
import { Typography } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'
import useOffersConnector from 'hooksConnectors/useOffersConnector'
import MapComponent from 'components/MapComponent'
import { Marker, MarkerClusterer } from '@react-google-maps/api'
import { isValidPosition } from 'helpers/map'
import Routes from 'constants/Routes'
import FilterBar from 'components/FilterBar'

const useStyles = makeStyles(theme => {
  console.log(theme)
  return ({
    offersContainer: {
      padding: theme.spacing(2),
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gridGap: theme.spacing(2),
      height: '50vh',
      overflow: 'scroll',
      boxShadow: theme.shadows[3],
      position: 'relative'
    },
    offer: {
      padding: theme.spacing(2),
      transition: 'all .3s',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
        boxShadow: theme.shadows[5]
      }
    },
    spacer: {
      gridColumn: '1 / -1',
      ...theme.mixins.toolbar
    },
    overflowBrokenPaddingFix: {
      height: theme.spacing(2),
      gridColumn: '1 / -1'
    }
  })
})

const AppBarSpacer = () => {
  const classes = useStyles()
  return <div className={classes.spacer} />
}

const OffersMainScreen = ({ history }) => {
  const offers = useOffersConnector()

  const [selectedOffer, selectOffer] = useState({})

  const classes = useStyles()

  const redirectToOffer = useCallback((offerId) => {
    return () => history.push(Routes.offerDetails.replace(':offerId', offerId))
  }, [])

  const mapPins = useMemo(() => {
    return (
      <MarkerClusterer
        minimumClusterSize={8}
      >
        {(clusterer) => offers.map(({ id, latitude: lat, longitude: lng }) => {
          return isValidPosition(lat, lng) && (
            <Marker
              key={id + 'marker'}
              position={{ lat, lng }}
              onClick={redirectToOffer(id)}
              clusterer={clusterer}
            />
          )
        })}
      </MarkerClusterer>
    )
  }, [offers, redirectToOffer])

  const handleSelectOffer = (offer) => () => selectOffer(offer)

  return (
    <>
      <div className={classes.offersContainer}>
        <FilterBar />
        <AppBarSpacer />
        {offers.map(offer => {
          const isSelected = selectedOffer.id
          return (
            <Paper
              key={offer.id}
              className={classes.offer}
              elevation={3}
              onClick={isSelected ? redirectToOffer(offer.id) : handleSelectOffer(offer)}
            >
              <Typography component='h4'>{offer.title}</Typography>
              {/* <Typography component='h4'>{offer.title}</Typography> */}
            </Paper>
          )
        })}
        <div className={classes.overflowBrokenPaddingFix} />
      </div>
      <MapComponent pins={mapPins} selectedOffer={selectedOffer} />
    </>
  )
}

export default OffersMainScreen
