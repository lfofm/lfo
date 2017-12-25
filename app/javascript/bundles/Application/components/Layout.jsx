import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from './Navigation'
import Player from './Player'

const Layout = ({ children, context: { currentUserKey } }) => (
  <div className="container-fluid">
    <Navigation currentUserKey={currentUserKey}/>
    <div className='container'>
      <div className='col-sm' style={{paddingTop: '40px'}}>
        {children}
      </div>
    </div>
    <Player />
    <div style={{paddingBottom: '80px'}}>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.object,
};

export default Layout;
