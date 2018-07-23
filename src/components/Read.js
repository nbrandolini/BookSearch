import React, { Component } from 'react';
import  { StyleSheet,  NavigatorIOS } from 'react-native';
import Bookcase from './Bookcase';

export default class Read extends Component {

  render() {
    return (
      <NavigatorIOS
          style={styles.container}
          initialRoute={{
              title: 'Read List',
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
