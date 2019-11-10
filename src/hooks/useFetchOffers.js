import { useEffect } from 'react'
import { getAllOffers } from 'ducks/offers'
import { useDispatch } from 'react-redux'

const useFetchOffers = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllOffers())
  }, [])
}

export default useFetchOffers
