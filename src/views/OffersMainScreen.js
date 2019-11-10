import React, { useCallback, useState } from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import useOffersConnector from 'hooksConnectors/useOffersConnector'
import MapComponent from 'components/MapComponent'
import Routes from 'constants/Routes'
import FilterBar from 'components/FilterBar'
import Offer from 'components/Offer'
import useMapPins from 'hooks/useMapPins'

const useStyles = makeStyles(theme => ({
  offersContainer: {
    padding: theme.spacing(2),
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gridGap: theme.spacing(2),
    gridAutoFlow: 'dense',
    height: '50vh',
    overflow: 'scroll',
    boxShadow: theme.shadows[3],
    position: 'relative'
  },
  spacer: {
    gridColumn: '1 / -1',
    ...theme.mixins.toolbar
  },
  overflowBrokenPaddingFix: {
    height: theme.spacing(2),
    gridColumn: '1 / -1'
  }
}))

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
  }, [history])

  const mapPins = useMapPins(offers, redirectToOffer, selectedOffer)
  const handleSelectOffer = useCallback((offer) => () => selectOffer(offer), [selectedOffer])

  return (
    <>
      <div className={classes.offersContainer}>
        <FilterBar />
        <AppBarSpacer />
        {offers.map(offer => {
          return (
            <Offer
              key={offer.id}
              offer={offer}
              selectedOffer={selectedOffer}
              handleSelectOffer={handleSelectOffer}
              redirectToOffer={redirectToOffer}
            />
          )
        })}
        <div className={classes.overflowBrokenPaddingFix} />
        {/* there is a bug where bottom padding doesnt display correctly when element has overflow set to scroll */}
      </div>
      <MapComponent pins={mapPins} selectedOffer={selectedOffer} />
    </>
  )
}

export default OffersMainScreen
