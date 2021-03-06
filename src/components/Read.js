import React, { Component } from 'react';
import  { StyleSheet,  NavigatorIOS } from 'react-native';
import Bookcase from './Bookcase';

export default class Read extends Component {

  render() {
    return (
      <NavigatorIOS
          style={styles.container}
          initialRoute={{
              title: 'My Bookcase',
              component: Bookcase,
            }}/>
      );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
