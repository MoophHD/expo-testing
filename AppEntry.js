import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/state/configureStore';
import App from './src/App';
import { KeepAwake, registerRootComponent, Font } from 'expo';
import { View } from 'react-native';

if (__DEV__) {
  KeepAwake.activate();
}


const store = configureStore();

export default class AppEntry extends Component {
    constructor(props) {
    super(props);
    this.state = { isFontLoaded: false };
  }
  
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ isFontLoaded: true });
  }
  
  render() {
    return (
      <Provider store={store}>
        <View style={{flexGrow: 1}}>
          { this.state.isFontLoaded && <App /> }
        </View>
      </Provider>
      
    );
  }
}


registerRootComponent(AppEntry);