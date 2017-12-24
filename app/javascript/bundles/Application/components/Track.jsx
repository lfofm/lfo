import PropTypes from 'prop-types';
import React from 'react';

import { graphql } from 'react-apollo'
import gql from 'graphql-tag';

import PlayAction from './PlayAction'

const FindTrack = gql`
  query FindTrack($id: String!) {
    track(id: $id) {
      id
      name
      track_plays_count
      user {
        id
        username
      }
    }
  }
`

const testImage = "https://img.discogs.com/MTfhjnsMIDjNw1ZWgcopw5nr8kY=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1544216-1356019971-5419.png.jpg"

const Track = ({ data: { loading, track }}) => (loading ? null : (
  <div className="card border-light bg-dark text-white track-card">
    <img className="blur-image card-img track-overlay" src={testImage} alt="Generic placeholder image" />
    <div className="card-img-overlay">
      <div className="row">
        <div className="col-sm-1">
          <PlayAction id={track.id} />
          <br />
          <span className="oi oi-heart track-action-sm"></span>
        </div>
        <div className="col-sm">
          <h4 className="bg-dark card-title p-2 w-fit">
            <a className='text-inherit' href={`/u/${track.user.id}/${track.id}`}>{track.name}</a>
          </h4>
          <p className="bg-dark card-text p-2 w-fit">
            <a className='text-inherit' href={`/u/${track.user.id}`}>{track.user.username}</a>
          </p>
        </div>
        <div className="col-sm d-none d-sm-block">
          <div class='float-right'>
            <img className='track-image mb-2' src={testImage} alt="Generic placeholder image" />
            <div className='bg-dark p-2'>
              <span className="oi oi-media-play mr-2"></span>
              {track.track_plays_count}
            </div>
            <div className='bg-dark p-2'>
              <span className="oi oi-heart mr-2"></span>
              {0}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
))

export default graphql(FindTrack, {
  options: ({ id }) => ({ variables: { id } })
})(Track)

