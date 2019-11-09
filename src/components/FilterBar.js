import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  button: {
    marginLeft: theme.spacing(2)
  }
}))

const FilterBar = () => {
  const classes = useStyles()
  return (
    <AppBar position='fixed'>
      <Toolbar>
        <Button className={classes.button} variant='contained' color='secondary'>
          php
        </Button>
        <Button className={classes.button} variant='contained'>
          java
        </Button>
        <Button className={classes.button} variant='contained'>
          ruby
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default FilterBar
