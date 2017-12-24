import PropTypes from 'prop-types';
import React from 'react';

import { graphql } from 'react-apollo'
import gql from 'graphql-tag';

import Track from './Track'
import TrackList from './TrackList'

const Collection = ({ currentUserKey, data: { loading, tracks } }) => {
  return loading ? null : <TrackList ids={tracks.map(t => t.id)} />
}

export default graphql(gql`{
  tracks {
    id
  }
}`)(Collection)
