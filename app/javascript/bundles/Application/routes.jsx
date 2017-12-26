import React from 'react';

import { Route, Switch } from 'react-router-dom';

import { ApolloProvider } from 'react-apollo';
import createClientWithState from './clients/ApolloClient';

import Collection from './components/Collection';
import Feed from './components/Feed';
import Layout from './components/Layout';
import TrackDetail from './components/TrackDetail';
import Upload from './components/Upload';
import User from './components/User';

const constructRoutes = ({ context }) => (
  <ApolloProvider client={createClientWithState(context)}>
    <Layout context={context}>
      <Switch>
        <Route
          path="/"
          component={Feed}
          exact
        />
        <Route
          path="/collection"
          component={Collection}
        />
        <Route
          path="/upload"
          component={Upload}
        />
        <Route
          path="/u/:id"
          component={User}
        />
      </Switch>
    </Layout>
  </ApolloProvider>
)

export default constructRoutes
