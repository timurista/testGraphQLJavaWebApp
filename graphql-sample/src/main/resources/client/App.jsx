/* eslint-disable */
import React, {Component} from 'react'
import Main from './components/Main.jsx';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import ApolloClient from 'apollo-client'; // integrates with server
import { ApolloProvider } from 'react-apollo'; // integrates with react

// no backend assumptions, to configure later
const client = new ApolloClient({});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={Main} />
        </Route>
      </Router>
    </ApolloProvider>
  );
}

export default App;
