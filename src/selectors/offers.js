import path from 'ramda/src/path'
import { transformToArray } from 'helpers/redux'
import { createSelector } from 'reselect'
import pipe from 'ramda/src/pipe'
import filter from 'ramda/src/filter'
import always from 'ramda/src/always'
import ifElse from 'ramda/src/ifElse'
import length from 'ramda/src/length'
import identity from 'ramda/src/identity'

const getOffers = path(['offers', 'entries'])

export const getAllOffersAsArray = createSelector(
  getOffers,
  (_, currentFilters) => currentFilters,
  (offers, filters) => {
    return pipe(
      transformToArray,
      ifElse(
        always(Boolean(length(filters))),
        filter(offer => offer.skills.some(skill => filters.includes(skill.name.toLowerCase()))),
        identity
      )
    )(offers)
  }
)
