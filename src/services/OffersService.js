import APIInterceptor from './APIInterceptor.js'

const OffersService = {
  getAllOffers: () => APIInterceptor.get('/offers')
}

export default OffersService
