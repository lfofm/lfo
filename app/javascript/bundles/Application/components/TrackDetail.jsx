import PropTypes from 'prop-types';
import React from 'react';

import { graphql } from 'react-apollo'
import gql from 'graphql-tag';

import Track from './Track'

const FindTrack = gql`
  query FindTrack($id: String!) {
    track(id: $id) {
      id
      description
      name
      user {
        id
        username
      }
    }
  }
`

const TrackDetail = ({ children, data: { loading, track }}) => (loading ? null : (
  <div>
    <Track id={track.id} detail />
    <div className='py-4'>
      <p className='h4 text-muted'>{track.description}</p>
    </div>
    <div className='py-4'>
      <button>
        Like track
      </button>
      <button>
        Add to playlist
      </button>
      <button>
        Share to Twitter
      </button>
    </div>
  </div>
))

export default graphql(FindTrack, {
  options: ({ match: { params } }) => ({ variables: { id: params.track_id } })
})(TrackDetail)
