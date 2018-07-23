/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import HomeScreen from './src/components/HomeScreen'
import DetailScreen from './src/components/DetailScreen'
import FormScreen from './src/components/FormScreen'
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import BottomNavigation from './src/router/BottomNavigation'


// const RootStack = createStackNavigator({
//   Home: HomeScreen,
//   Detail: DetailScreen
// },
//   { initialRouteName: 'Home' }
// )

const client = new ApolloClient({
  link: new HttpLink({
    uri: `http://localhost:3000/graphql`,
  }),
  cache: new InMemoryCache()
});

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BottomNavigation />
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
