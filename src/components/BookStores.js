import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class BookStores extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>My Lists of Books???</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
