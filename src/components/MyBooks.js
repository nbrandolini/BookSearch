import React, { Component } from 'react';
import  {
    StyleSheet,
    NavigatorIOS,
  } from 'react-native';
import BookStores from './BookStores';

export default class MyBooks extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
            title: 'My Bookcase',
            component: BookStores,
          }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
