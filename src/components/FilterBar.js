import React, { useCallback, useMemo } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import qs from 'query-string'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import makeStyles from '@material-ui/core/styles/makeStyles'
import includes from 'ramda/src/includes'
import append from 'ramda/src/append'
import filter from 'ramda/src/filter'
import join from 'ramda/src/join'
import assoc from 'ramda/src/assoc'
import availableFilters from 'constants/availableFilters'
import { notEquals } from 'helpers/logic'
import { getFiltersFromLocation } from 'helpers/location'

const useStyles = makeStyles(theme => ({
  toolbar: {
    '& > *:not(:first-child)': {
      marginLeft: theme.spacing(2)
    }
  }
}))

const FilterBar = () => {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()

  const currentFilters = useMemo(() => getFiltersFromLocation(location), [location])

  const applyFilter = useCallback((filterName) => () => {
    const isFilterApplied = includes(filterName, currentFilters)
    const newFilters = isFilterApplied
      ? filter(notEquals(filterName), currentFilters)
      : append(filterName, currentFilters)
    const newSearch = newFilters.length
      ? qs.stringify({ filters: join(',', newFilters) })
      : ''

    const newLocation = assoc('search', newSearch, location)
    history.push(newLocation)
  }, [history, currentFilters])

  return (
    <AppBar position='fixed'>
      <Toolbar className={classes.toolbar}>
        {availableFilters.map((filterName, index) => {
          const isSelected = currentFilters.includes(filterName)
          return (
            <Button
              key={filterName + index}
              className={classes.button}
              variant='contained'
              color={isSelected ? 'secondary' : 'primary'}
              onClick={applyFilter(filterName)}
            >
              {filterName}
            </Button>
          )
        })}
      </Toolbar>
    </AppBar>
  )
}

export default FilterBar
