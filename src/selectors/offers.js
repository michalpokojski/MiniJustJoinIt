import path from 'ramda/src/path'
import { transformToArray } from 'helpers/redux'
import { createSelector } from 'reselect'

const getOffers = path(['offers', 'entries'])

export const getAllOffersAsArray = createSelector(
  getOffers,
  transformToArray
)
