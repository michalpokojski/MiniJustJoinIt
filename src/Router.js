import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Routes from 'constants/Routes'
import OffersMainScreen from 'views/OffersMainScreen'
import JobOfferDetailsScreen from 'views/JobOfferDetailsScreen'

const IndexRedirect = () => <Redirect to={Routes.home} />

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.home} component={OffersMainScreen} />
        <Route path={Routes.offerDetails} component={JobOfferDetailsScreen} />
        <Route component={IndexRedirect} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
