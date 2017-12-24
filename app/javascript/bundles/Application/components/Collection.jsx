import PropTypes from 'prop-types';
import React from 'react';

import { graphql } from 'react-apollo'
import gql from 'graphql-tag';

import Track from './Track'

const Collection = ({ currentUserKey, data: { loading, tracks } }) => {
  return loading ? null : (
    <div class="container">
    {tracks.map(track => (
      <div className='row py-4'>
        <div className='col-sm'>
          <Track key={track.id} id={track.id} />
        </div>
        <div className='col-sm'></div>
      </div>
    ))}
    </div>
  )
}

export default graphql(gql`{
  tracks {
    id
  }
}`)(Collection)
