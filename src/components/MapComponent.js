import * as PropTypes from 'prop-types'
import React from 'react'
import { GoogleMap, useLoadScript } from '@react-google-maps/api'
import LinearProgress from '@material-ui/core/LinearProgress'
import makeStyles from '@material-ui/core/styles/makeStyles'
import path from 'ramda/src/path'

const useStyles = makeStyles({
  mapContainer: {
    height: '50vh',
    position: 'relative'
  }
})

const options = {
  position: path(['google', 'maps', 'ControlPosition', 'RIGHT_CENTER'], window)
}

const MapComponent = ({ pins, center, zoom }) => {
  const { isLoaded, loadError } = useLoadScript({ googleMapsApiKey: process.env.REACT_APP_API_GOOGLE_MAPS_API_KEY })
  const classes = useStyles()

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  return (
    <div className={classes.mapContainer}>
      {isLoaded ? (
        <GoogleMap
          options={options}
          mapContainerStyle={{ height: '100%', width: '100%' }}
          zoom={zoom}
          center={center}
        >
          {pins}
        </GoogleMap>
      ) : (
        <LinearProgress />
      )}
    </div>
  )
}

MapComponent.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired
  }).isRequired,
  zoom: PropTypes.number.isRequired,
  pins: PropTypes.any
}

MapComponent.defaultProps = {
  center: { lat: 52.097925, lng: 19.221841 },
  zoom: 6
}

export default MapComponent
