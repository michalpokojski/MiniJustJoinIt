import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Routes from 'constants/Routes'
import Button from '@material-ui/core/Button'
import OffersMainScreen from 'views/OffersMainScreen'

const IndexRedirect = () => <Redirect to={Routes.home} />

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.main} component={OffersMainScreen} />
        <Route exact path={Routes.offerDetails} component={() => <Button>siemanko</Button>} />
        <Route component={IndexRedirect} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
