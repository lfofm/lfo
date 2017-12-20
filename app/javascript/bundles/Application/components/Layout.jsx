import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from './Navigation'

const Layout = ({ children }) => (
  <div className="container">
    <Navigation />
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;
