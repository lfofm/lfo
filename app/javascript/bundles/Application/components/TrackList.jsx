import React from 'react';

import { graphql } from 'react-apollo'
import gql from 'graphql-tag';

import Track from './Track'

const FindTracks = gql`
  query FindTracks($ids: [String!]) {
    tracksById(ids: $ids) {
      id
      name
    }
  }
`

const TrackList = ({ data: { loading, tracksById } }) => (loading ? null : (
  <div className="container">
    {tracksById.map(track => (
      <div className='row py-4' key={track.id}>
        <div className='col-sm'>
          <Track id={track.id} />
        </div>
      </div>
    ))}
  </div>
))

export default graphql(FindTracks, {
  options: ({ ids }) => ({ variables: { ids: ids } })
})(TrackList)
