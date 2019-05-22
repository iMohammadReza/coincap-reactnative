import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import Application from './src/App'
import Store from './src/Store';


export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Application/>
      </Provider>
    );
  }
}