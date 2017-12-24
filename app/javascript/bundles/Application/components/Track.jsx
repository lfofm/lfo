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

const Track = ({ data: { loading, track }, detail}) => (loading ? null : (
  <div className="card border-light bg-primary text-white track-card">
    <img className={`blur-image card-img track-overlay ${detail ? 'detail' : ''}`} src={testImage} alt="Generic placeholder image" />
    <div className="card-img-overlay">
      <div className="row">
        <div className="col-sm-1">
          <div className='bg-primary px-2 py-1 w-fit'>
            <PlayAction id={track.id} />
          </div>
        </div>
        <div className="col-sm">
          <h3 className="bg-primary card-title p-2 w-fit">
            <a className='text-inherit' href={`/u/${track.user.id}/${track.id}`}>{track.name}</a>
          </h3>
          <h4 className="bg-primary card-text p-2 w-fit">
            <a className='text-inherit' href={`/u/${track.user.id}`}>{track.user.username}</a>
          </h4>
          <div className='bg-primary p-2 w-fit'>
            <span className='mr-2'>
              <span className="oi oi-media-play mr-2"></span>
              {track.track_plays_count}
              </span>
            <span>
              <span className="oi oi-heart mr-2"></span>
              {0}
            </span>
          </div>
        </div>
        <div className="col-sm d-none d-sm-block">
          <div className='float-right'>
            <img className='track-image mb-2' src={testImage} alt="Generic placeholder image" />
          </div>
        </div>
      </div>
    </div>
  </div>
))

export default graphql(FindTrack, {
  options: ({ id }) => ({ variables: { id } })
})(Track)

