import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from './components/App/App'
import Home from './components/Home/Home'
import Images from "./components/Images/Images"
import Contact from "./components/Contact/Contact"

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="galleri" component={Images}/>
      <Route path="kontakt" component={Contact}/>
    </Route>
  </Router>
);

export default Routes;
