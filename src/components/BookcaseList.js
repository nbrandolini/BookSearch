import React from 'react';
import { Text, View, StyleSheet, Component } from 'react-native';


export default class BookcaseList extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Text>
          HELLOOOOOO!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
