import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class BookShops extends Component {
  render() {
    return (
    <View>
      <Text style={{
            textAlign: 'center',
            fontSize: 20,
            marginTop: 200,
            padding: 10,
          }}>A book journal app in progress!
          Technologies used: React Native, Rails, Expo, Google Books API, and soon Redux.</Text>
    </View>
    );
  }
}
