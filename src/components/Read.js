import React, { Component } from 'react';
import  { StyleSheet, Text,  ScrollView, Image } from 'react-native';

export default class Read extends Component {

  render() {

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  image: {
    width: 107,
    height: 165,
    padding: 10,
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
  },
  author: {
    color: '#656565',
  },
});
