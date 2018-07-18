import React, { Component } from 'react';
import  {
    StyleSheet,
    NavigatorIOS,
  } from 'react-native';
import BookStores from './BookStores';

export default class More extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
            title: 'BookStores',
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
