import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getAllOffers } from 'ducks/offers'
import { useEffect, useMemo } from 'react'
import { getAllOffersAsArray } from 'selectors/offers'
import { getFiltersFromLocation } from 'helpers/location'

const useOffersConnector = () => {
  const dispatch = useDispatch()
  const location = useLocation()

  const currentFilters = useMemo(() => getFiltersFromLocation(location), [location])

  const offers = useSelector(state => getAllOffersAsArray(state, currentFilters))

  useEffect(() => {
    dispatch(getAllOffers())
  }, [])

  return offers
}

export default useOffersConnector
