import React from 'react'
import { Router, browserHistory } from 'react-router'
import constructRoutes from '../routes'

export default (props) => (
  <Router history={browserHistory} {...props} >
    {constructRoutes()}
  </Router>
);
