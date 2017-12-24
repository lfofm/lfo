import PropTypes from 'prop-types';
import React from 'react';

import { graphql } from 'react-apollo'
import gql from 'graphql-tag';

import { Switch, Route } from 'react-router-dom';
import Track from './Track'
import TrackDetail from './TrackDetail'
import TrackList from './TrackList'

const FindUser = gql`
  query FindUser($id: String!) {
    user(id: $id) {
      id
      username
      tracks {
        id
      }
    }
  }
`

const userInfo = (user) => (
  <div>
    <img className="py-4" src="https://placehold.it/150x150" />
    <h1>{user.username}</h1>
    <h3>{user.tracks.length} tracks</h3>
  </div>
)

const trackList = (user) => <TrackList ids={user ? user.tracks.map(t => t.id) : []} />

const User = ({ children, data: { loading, user }}) => (loading ? null : (
  <div>
    <div className='row'>
      <div className='col-sm-3'>
        {userInfo(user)}
      </div>
      <div className='col-sm'>
        <Switch>
          <Route path="/u/:id" exact component={() => trackList(user)} />
          <Route path="/u/:id/:track_id" component={TrackDetail} />
        </Switch>
      </div>
    </div>
  </div>
))

export default graphql(FindUser, {
  options: ({ match: { params } }) => ({ variables: { id: params.id } })
})(User)
