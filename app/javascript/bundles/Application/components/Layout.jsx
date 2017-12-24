import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from './Navigation'

const Layout = ({ children, context: { currentUserKey } }) => (
  <div className="container">
    <Navigation currentUserKey={currentUserKey}/>
    <div className='row'>
      <div className='col-sm' style={{paddingTop: '60px'}}>
        {children}
      </div>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;
