import complement from 'ramda/src/complement'
import equals from 'ramda/src/equals'

export const notEquals = complement(equals)
