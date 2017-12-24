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
      description
      username
      tracks {
        id
      }
    }
  }
`

const userInfo = (user) => (
  <div className='py-4'>
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">About</h4>
        <p className="card-text">
          {user.description}
        </p>
      </div>
    </div>

    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Details</h4>
        <p className="card-text">
          <span className='oi oi-pin'></span> Los Angeles, CA
        </p>
      </div>
    </div>

    <div className="card">
      <div className="card-body">
        <h4 className="card-title">Links</h4>
        <p className="card-text">
          Twitter
        </p>
      </div>
    </div>
  </div>
)

const trackList = (user) => <TrackList ids={user ? user.tracks.map(t => t.id) : []} />

const User = ({ children, data: { loading, user }}) => (loading ? null : (
  <div>
    <div className='row'>
      <div className="col-sm">
        <div className='card'>
          <h4>{user.username}</h4>
        </div>
      </div>
    </div>
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
