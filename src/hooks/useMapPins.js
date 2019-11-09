import React, { useMemo } from 'react'
import { Marker, MarkerClusterer } from '@react-google-maps/api'
import { isValidPosition } from 'helpers/map'

const useMapPins = (offers, redirectToOffer) => {
  const mapPins = useMemo(() => {
    return (
      <MarkerClusterer
        minimumClusterSize={8}
      >
        {(makeCluster) => offers.map(({ id, latitude: lat, longitude: lng }) => {
          return isValidPosition(lat, lng) && (
            <Marker
              key={id + 'marker'}
              position={{ lat, lng }}
              onClick={redirectToOffer(id)}
              clusterer={makeCluster}
            />
          )
        })}
      </MarkerClusterer>
    )
  }, [offers, redirectToOffer])
  return mapPins
}

export default useMapPins
