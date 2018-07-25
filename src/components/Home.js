import React, { Component } from 'react';
import { Text, ImageBackground } from 'react-native';

const remote = 'https://images.unsplash.com/photo-1513542992587-cd39ba97057c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ac4d1959a9ccad960eb398b64c02eb59&auto=format&fit=crop&w=750&q=80'

export default class Home extends Component {
  render() {
    const text = 'Book Journal!';

    return (
      <ImageBackground style={{ width: '100%', height: '100%' }} source={{ uri: remote }}  >
          <Text style={{
              textAlign: 'center',
              fontSize: 40,
              marginTop: 170,
            }}>{text}
          </Text>
      </ImageBackground>
    );
  }
}
