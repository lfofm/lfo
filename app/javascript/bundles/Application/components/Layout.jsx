import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from './Navigation'

const Layout = ({ children }) => (
  <div className="container">
    <Navigation />
    <div style={{paddingTop: '60px'}}>
      {children}
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;
