import qs from 'query-string'
import pipe from 'ramda/src/pipe'
import propOr from 'ramda/src/propOr'
import split from 'ramda/src/split'
import filter from 'ramda/src/filter'

export const getFiltersFromLocation = pipe(
  propOr('', 'search'),
  qs.parse,
  propOr('', 'filters'),
  split(','),
  filter(Boolean)
)
