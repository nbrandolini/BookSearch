import React, { Component } from 'react';
import {
    NavigatorIOS,
  } from 'react-native';
import BookList from './BookList';

export default class Featured extends Component {
  render() {
    return (
      <NavigatorIOS
         initialRoute = {{
            title: 'Featured Books',
            component: BookList,
          }}
          style={{ flex: 1 }}
          />
    );
  }
}
