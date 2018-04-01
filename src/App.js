import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from 'state/configureStore';
import Main from './scenes/Main';
import { Font, AppLoading } from "expo";

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Main />
    ) 
  }
}


export default App;