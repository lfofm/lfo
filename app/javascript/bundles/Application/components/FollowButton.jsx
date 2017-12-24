import PropTypes from 'prop-types';
import React from 'react';

import { graphql } from 'react-apollo'
import { compose } from 'react-apollo';
import gql from 'graphql-tag';

const CheckRelationship = gql`
  query CheckRelationship($currentUserKey: String!, $id: String!) {
    checkRelationship(currentUser: $currentUserKey, id: $id) {
      follower { id }
      followed { id }
    }
  }
`

const ToggleFollowUser = gql`
  mutation FollowUser($currentUserKey: String!, $id: String!) {
    toggleFollowUser(currentUser: $currentUserKey, id: $id) {
      followed { id }
      follower { id }
    }
  }
`

const FollowButton = ({ data: { checkRelationship }, mutate, user, currentUserId = null}) => {
  if (checkRelationship) {
    return (
      <div className='card my-2 border-none w-100'>
        <button className='btn btn-primary pointer' onClick={mutate}>
          <span className='oi oi-check mr-2'></span>
          Following {user.username}
        </button>
      </div>
    )
  } else {
    return (
      <div className='card bg-none my-2 border-none w-100'>
        <button className='btn btn-outline-primary pointer' onClick={mutate}>
          <span className='oi oi-plus mr-2'></span>
          Follow {user.username}
        </button>
      </div>
    )
  }
}

export default compose(
  graphql(CheckRelationship, {
    options: ({ currentUserKey, user }) => ({
      variables: {
        currentUserKey,
        id: user.id
      }
    })
  }),
  graphql(ToggleFollowUser, {
    options: ({ currentUserKey, user }) => ({
      refetchQueries: [`CheckRelationship`],
      variables: {
        currentUserKey,
        id: user.id
      }
    }),
  })
)(FollowButton)
