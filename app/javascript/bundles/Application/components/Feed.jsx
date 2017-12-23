import PropTypes from 'prop-types';
import React from 'react';

import Landing from './Landing'

export default class Feed extends React.Component {
  render() {
    const { currentUserKey } = this.props

    const feed = (
      <div>
        <h1>feedin</h1>
      </div>
    );

    return currentUserKey ? <Landing /> : feed
  }
}
