import React from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag';

const PlayTrack = gql`
  mutation PlayTrack($id: String!) {
    playTrack(id: $id) {
      track {
        id
        track_plays_count
      }
    }
  }
`

const PlayAction = ({ mutate }) => (
  <span className="oi oi-media-play track-action pointer" onClick={mutate}></span>
)

export default graphql(PlayTrack, {
  options: ({ id }) => ({ variables: { id: id } })
})(PlayAction)
