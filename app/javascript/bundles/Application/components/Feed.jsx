import PropTypes from 'prop-types';
import React from 'react';

import { graphql } from 'react-apollo'
import gql from 'graphql-tag';

import Landing from './Landing'
import TrackList from './TrackList'

const FeedTracks = ({ data: { loading, tracks } }) => {
  return loading ? null : <TrackList ids={tracks.map(t => t.id)} />
}

const FeedWithItems = graphql(gql`{
  tracks {
    id
  }
}`)(FeedTracks)

export default class Feed extends React.Component {
  render() {
    const { currentUserKey } = this.props
    return currentUserKey ? <Landing /> : <FeedWithItems />
  }
}
