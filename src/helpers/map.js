import is from 'ramda/es/is'
import gte from 'ramda/es/gte'
import lte from 'ramda/es/lte'
import allPass from 'ramda/es/allPass'

const isNumber = is(Number)

const isLatitudeValid = allPass([isNumber, gte(90), lte(-90)])
const isLongitudeValid = allPass([isNumber, gte(180), lte(-180)])

export const isValidPosition = (latitude, longitude) => isLatitudeValid(latitude) && isLongitudeValid(longitude)
