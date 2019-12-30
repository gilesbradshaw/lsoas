import React from 'react';
import { ApolloLink } from 'apollo-link'
import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { onError } from 'apollo-link-error'
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'
import { createHttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { ThemeProvider } from 'styled-components'
import { ModalProvider } from 'styled-react-modal'
import {
  Switch,
  Route,
  RouteComponentProps,
} from 'react-router-dom'

import { lifecycle, withState, compose } from 'recompose'


// import Lib from 'lib'
import T from './G'

// import './App.css';
//import Zone from '../../../oldts/Zone'
import theme from './theme'

// const GRAPHQL_ENDPOINT = `wss://${window.location.host}/graphql/`;
// const GRAPHQL_ENDPOINT = `wss://www.zone4a.sigyl/graphql/`;
const GRAPHQL_ENDPOINT = `http://localhost:4000/graphql/`;
//const GRAPHQL_ENDPOINT = `ws://zone4a.sigyl/graphql/`;

const Null = () => <>null</>
const Admin = () => <>admin</>
const Lost = () => <>lost</>

const Connected: React.FC<{ client: any } & RouteComponentProps> =
  ({
    client,
    match: {
      path,
    },
    history,
  }) => {
    // @ts-ignore
    window.rrHistory = history
    if (client) {
      return (
        <ThemeProvider theme={theme}>
          <ModalProvider>
            <ApolloProvider client={client}>
              <ApolloHooksProvider client={client}>
                <>
                  <Switch>
                    <Route
                      component={T}
                      path={`${path}`}
                      exact
                    />
                    <Route
                      component={Admin}
                      path={`${path}admin`}
                    />
                    <Route
                      component={Lost}
                    />
                  </Switch>
                </>
              </ApolloHooksProvider>
            </ApolloProvider>
          </ModalProvider>
        </ThemeProvider>
      )
    }
    return null
  }

export default compose(
  withState<any, any, string, string>('client', 'setClient', null),
  lifecycle<{ client: any }, {}>({
    // @ts-ignore
    componentWillMount() {
      Promise.resolve()
        .then(
          () => {
            const l = sessionStorage
              .getItem(
                'login',
              )
            const login = l === 'undefined'
              ? {}
              : JSON.parse(
                l || '{}',
              )
            const link = createHttpLink({
              uri: GRAPHQL_ENDPOINT,
            })
            const client = new ApolloClient({
              link: ApolloLink.from([
                onError(({ graphQLErrors, networkError }) => {
                  if (graphQLErrors)
                    graphQLErrors.map(({ message, locations, path }) =>
                      console.error(
                        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
                      ),
                    );
                  if (networkError) {
                    console.error(`[Network error]`, networkError);
                  }
                }),
                link
              ]),
              cache: new InMemoryCache({
                dataIdFromObject: (o): string | undefined => {
                  if (o.id) {
                    return `${o.id}:${o.__typename}`
                  }
                }
              })
            })
            // @ts-ignore
            this.props.setClient(client)
          }
        )
    }
  }),
  // @ts-ignore
)(Connected);



/*
import React from 'react'

const Connected: React.FC = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      yah
    </div>
  );
}

export default Connected
*/