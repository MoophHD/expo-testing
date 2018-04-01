import React, { Component } from 'react';
import { Container, Body, Button, Text } from 'native-base';
import { View } from 'react-native';
import styled from 'styled-components/native';
import MusicManager from 'assets/MusicManager';

const Wrapper = styled.View`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Btn = styled(Button)`
  background-color: crimson;
  height: 50px;
  width: 80px;
`

class Main extends Component {
  
  playSound() {
    MusicManager.play("bg");
  }
  
  render() {
    const { actions, counter } = this.props;
    return (
      <Wrapper>
        <Btn onPress={this.playSound} >
          <Text>play sound</Text>
        </Btn>
      </Wrapper>
  )

  }
}

export default Main;