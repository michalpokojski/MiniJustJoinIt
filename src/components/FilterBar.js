import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

const FilterBar = (props) => {
  return (
    <AppBar position='fixed'>
      <Toolbar>
        <Button style={{ marginLeft: 'auto' }}>
          php
        </Button>
        <Button>
          java
        </Button>
        <Button style={{ marginRight: 'auto' }}>
          ruby
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default FilterBar
