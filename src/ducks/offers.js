import OffersService from 'services/OffersService'
import { transformById } from 'helpers/redux'

const GET_ALL_OFFERS = Symbol('GET_ALL_OFFERS')
const GET_ALL_OFFERS_SUCCESS = Symbol('GET_ALL_OFFERS_SUCCESS')
const GET_ALL_OFFERS_FAILED = Symbol('GET_ALL_OFFERS_FAILED')

const getAllOffersRequest = () => ({ type: GET_ALL_OFFERS })
const getAllOffersSuccess = (data) => ({ type: GET_ALL_OFFERS_SUCCESS, data })
const getAllOffersFailed = () => ({ type: GET_ALL_OFFERS_FAILED })

export const getAllOffers = () => {
  return async dispatch => {
    dispatch(getAllOffersRequest())
    try {
      const { data } = await OffersService.getAllOffers()
      return dispatch(getAllOffersSuccess(data))
    } catch (e) {
      return dispatch(getAllOffersFailed(e))
    }
  }
}

const initState = {
  entries: {}
}

export default (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_OFFERS_SUCCESS:
      return {
        ...state,
        entries: transformById(action.data)
      }
    default:
      return state
  }
}
