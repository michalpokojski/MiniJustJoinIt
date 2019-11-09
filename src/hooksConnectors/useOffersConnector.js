import { useDispatch, useSelector } from 'react-redux'
import { getAllOffers } from 'ducks/offers'
import { useEffect } from 'react'
import { getAllOffersAsArray } from 'selectors/offers'

const useOffersConnector = () => {
  const offers = useSelector(getAllOffersAsArray)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllOffers())
  }, [])

  return offers
}

export default useOffersConnector
