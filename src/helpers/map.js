import is from 'ramda/src/is'
import gte from 'ramda/src/gte'
import lte from 'ramda/src/lte'
import allPass from 'ramda/src/allPass'

const isNumber = is(Number)

const isLatitudeValid = allPass([isNumber, gte(90), lte(-90)])
const isLongitudeValid = allPass([isNumber, gte(180), lte(-180)])

export const isValidPosition = (latitude, longitude) => isLatitudeValid(latitude) && isLongitudeValid(longitude)
