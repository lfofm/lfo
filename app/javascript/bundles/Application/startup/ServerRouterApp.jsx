import React from 'react';
import { StaticRouter } from 'react-router';
import ReactOnRails from 'react-on-rails';
import routes from '../routes/routes';

import { ApolloProvider } from 'react-apollo';
import client from '../clients/ApolloClient'

export default (_props, railsContext) => {
  let error;
  let redirectLocation;
  const { location } = railsContext;

  // This tell react_on_rails to skip server rendering any HTML. Note, client rendering
  // will handle the redirect. What's key is that we don't try to render.
  // Critical to return the Object properties to match this { error, redirectLocation }
  if (error || redirectLocation) {
    return { error, redirectLocation };
  }

  // Allows components to add properties to the object to store
  // information about the render.
  const context = {};

  // Important that you don't do this if you are redirecting or have an error.
  return (
    <ApolloProvider client={client}>
      <StaticRouter
        location={location}
        context={context}
      >
        {routes}
      </StaticRouter>
    </ApolloProvider>
  );
};
