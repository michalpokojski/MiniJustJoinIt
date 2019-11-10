import React, { useMemo } from 'react'
import { Marker } from '@react-google-maps/api'
import { isValidPosition } from 'helpers/map'
import { isNotEmpty } from 'helpers/logic'
import { getMapPinOpacity } from 'helpers/styles'

const useMapPins = (offers, redirectToOffer, selectedOffer) => {
  const isAnySelected = isNotEmpty(selectedOffer)
  return useMemo(() => {
    return (
      offers.map(({ id, latitude: lat, longitude: lng }) => {
        const isSelected = selectedOffer.id === id
        return isValidPosition(lat, lng) && (
          <Marker
            key={id + 'marker'}
            position={{ lat, lng }}
            onClick={redirectToOffer(id)}
            animation={isSelected ? 1 : null}
            opacity={getMapPinOpacity(isAnySelected, isSelected)}
          />
        )
      })
    )
  }, [offers, redirectToOffer, selectedOffer])
}

export default useMapPins
