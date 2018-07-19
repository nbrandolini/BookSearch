import React, { Component } from 'react';
import  {
    StyleSheet,
    NavigatorIOS,
  } from 'react-native';
import SearchResults from './SearchResults';

export default class MyBookcase extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
            title: 'My Bookcase',
            component: SearchResults,
          }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
