import complement from 'ramda/src/complement'
import equals from 'ramda/src/equals'
import isEmpty from 'ramda/src/isEmpty'

export const notEquals = complement(equals)
export const isNotEmpty = complement(isEmpty)
