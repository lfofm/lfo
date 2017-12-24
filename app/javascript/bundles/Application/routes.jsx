import React from 'react';

import Collection from './components/Collection';
import Layout from './components/Layout';
import Feed from './components/Feed';
import User from './components/User';
import TrackDetail from './components/TrackDetail';

import { Route, Switch } from 'react-router-dom';

import { ApolloProvider } from 'react-apollo';
import client from './clients/ApolloClient';

const constructRoutes = ({ context }) => (
  <ApolloProvider client={client}>
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
          path="/u/:id"
          component={User}
        />
      </Switch>
    </Layout>
  </ApolloProvider>
)

export default constructRoutes
