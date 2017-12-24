import PropTypes from 'prop-types';
import React from 'react';

import { graphql } from 'react-apollo'
import gql from 'graphql-tag';

import { Switch, Route } from 'react-router-dom';
import Track from './Track'
import TrackDetail from './TrackDetail'
import TrackList from './TrackList'

import verified from '../assets/verified.svg'

const FindUser = gql`
  query FindUser($id: String!) {
    user(id: $id) {
      id
      description
      username
      verified
      tracks {
        id
      }
    }
  }
`

const userHeader = (user) => (
  <div className="card card-profile">
    <div className="card-header" style={{backgroundImage: 'url(https://source.unsplash.com/random)'}}></div>
    <div className="card-body text-center">
      <img className="card-profile-img" src="https://source.unsplash.com/random/200x200" />

      <h4 className="card-title">
        {user.username}
        {user.verified && <img className='ml-1' src={verified} />}
      </h4>

      <ul className="card-menu">
        <li className="card-menu-item">
          Followers
          <h6 className="my-0">12M</h6>
        </li>

        <li className="card-menu-item">
          Following
          <h6 className="my-0">1</h6>
        </li>
      </ul>
    </div>
  </div>
)

const userInfo = (user) => (
  <div className='py-4'>
    <div className='card bg-none my-2 border-none w-100'>
      <button className='btn btn-outline-primary'>
        <span className='oi oi-plus mr-2'></span>
        Follow {user.username}
      </button>
    </div>

    <div className='card bg-none my-2 border-none w-100'>
      <button className='btn btn-outline-success'>
        <span className='oi oi-dollar mr-2'></span>
        Support {user.username}
      </button>
    </div>

    {user.description && (
    <div className="card my-2">
      <div className="card-body">
        <p className="card-title font-weight-bold">About</p>
        <p className="card-text">
          {user.description}
        </p>
      </div>
    </div>)}

    <div className="card my-2">
      <div className="card-body">
        <p className="card-title font-weight-bold">Details</p>
        <p className="card-text">
          <span className='oi oi-pin'></span> Los Angeles, CA
        </p>
      </div>
    </div>

    <div className="card my-2">
      <div className="card-body">
        <p className="card-title font-weight-bold">Links</p>
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
    {userHeader(user)}
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
