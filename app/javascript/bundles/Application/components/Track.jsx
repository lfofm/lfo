import PropTypes from 'prop-types';
import React from 'react';

import { graphql } from 'react-apollo'
import gql from 'graphql-tag';

const FindTrack = gql`
  query FindTrack($id: String!) {
    track(id: $id) {
      id
      name
      user {
        id
        username
      }
    }
  }
`

const Track = ({ data: { loading, track }}) => (loading ? null : (
  <div className="card border-light bg-dark text-white">
    <img className="blur-image card-img" src={"https://source.unsplash.com/random/671x270"} alt="Generic placeholder image" />
    <div className="card-img-overlay">
      <div className="row">
        <div className="col-sm">
          <h4 className="bg-dark card-title p-2 w-fit">
            <a className='text-inherit' href={`/u/${track.user.id}/${track.id}`}>{track.name}</a>
          </h4>
          <p className="bg-dark card-text p-2 w-fit">
            <a className='text-inherit' href={`/u/${track.user.id}`}>{track.user.username}</a>
          </p>
        </div>
        <div class="col-sm d-none d-sm-block">
          <img className='float-right' src={"https://source.unsplash.com/random/100x100"} alt="Generic placeholder image" />
        </div>
      </div>
    </div>
  </div>
))

export default graphql(FindTrack, {
  options: ({ id }) => ({ variables: { id } })
})(Track)

